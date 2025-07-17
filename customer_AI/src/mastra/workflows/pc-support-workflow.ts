import { createStep, createWorkflow } from '@mastra/core/workflows';
import { z } from 'zod';

// 問題カテゴリの定義
const problemCategories = [
  'windows-startup',
  'internet-connection',
  'software-issues',
  'hardware-issues',
  'system-performance'
] as const;

// 問題診断ステップ
const diagnoseProblem = createStep({
  id: 'diagnose-problem',
  description: 'ユーザーの問題を分析し、適切なカテゴリに分類します',
  inputSchema: z.object({
    description: z.string().describe('ユーザーが報告した問題の説明'),
    userLevel: z.enum(['beginner', 'intermediate', 'advanced']).optional().describe('ユーザーの技術レベル'),
  }),
  outputSchema: z.object({
    category: z.enum(problemCategories).describe('問題のカテゴリ'),
    symptom: z.string().describe('特定された症状'),
    difficultyLevel: z.enum(['easy', 'medium', 'advanced']).describe('推奨される解決策の難易度'),
  }),
  execute: async ({ inputData, mastra }) => {
    if (!inputData) {
      throw new Error('入力データがありません');
    }

    const { description, userLevel = 'beginner' } = inputData;

    // エージェントを使用して問題を分析
    const agent = mastra?.getAgent('pcSupportAgent');
    if (!agent) {
      throw new Error('PCサポートエージェントが見つかりません');
    }

    const prompt = `
    以下のユーザーの問題説明を分析し、最も適切なカテゴリと具体的な症状を特定してください。
    また、ユーザーの技術レベルに基づいて適切な難易度の解決策を提案してください。

    ユーザーの問題説明: ${description}
    ユーザーの技術レベル: ${userLevel}

    以下の形式で回答してください:
    {
      "category": "問題カテゴリ（windows-startup, internet-connection, software-issues, hardware-issues, system-performanceのいずれか）",
      "symptom": "特定された具体的な症状",
      "difficultyLevel": "推奨される解決策の難易度（easy, medium, advancedのいずれか）"
    }
    `;

    const response = await agent.complete([
      {
        role: 'user',
        content: prompt,
      },
    ]);

    try {
      // JSONレスポンスをパース
      const responseText = response.text;
      const jsonMatch = responseText.match(/\\{[\\s\\S]*?\\}/);

      if (!jsonMatch) {
        // JSONが見つからない場合はデフォルト値を返す
        return {
          category: 'system-performance',
          symptom: description,
          difficultyLevel: userLevel === 'beginner' ? 'easy' : userLevel === 'intermediate' ? 'medium' : 'advanced',
        };
      }

      const result = JSON.parse(jsonMatch[0]);

      return {
        category: result.category,
        symptom: result.symptom,
        difficultyLevel: result.difficultyLevel,
      };
    } catch (error) {
      console.error('JSON解析エラー:', error);
      // エラー時はデフォルト値を返す
      return {
        category: 'system-performance',
        symptom: description,
        difficultyLevel: userLevel === 'beginner' ? 'easy' : userLevel === 'intermediate' ? 'medium' : 'advanced',
      };
    }
  },
});

// 解決策提供ステップ
const provideSolution = createStep({
  id: 'provide-solution',
  description: '診断結果に基づいて解決策を提供します',
  inputSchema: z.object({
    category: z.enum(problemCategories).describe('問題のカテゴリ'),
    symptom: z.string().describe('特定された症状'),
    difficultyLevel: z.enum(['easy', 'medium', 'advanced']).describe('推奨される解決策の難易度'),
  }),
  outputSchema: z.object({
    response: z.string().describe('ユーザーへの回答'),
  }),
  execute: async ({ inputData, mastra }) => {
    if (!inputData) {
      throw new Error('入力データがありません');
    }

    const { category, symptom, difficultyLevel } = inputData;

    // PCトラブルシューティングツールを使用して解決策を取得
    const agent = mastra?.getAgent('pcSupportAgent');
    if (!agent) {
      throw new Error('PCサポートエージェントが見つかりません');
    }

    // ツールを使用して解決策を取得
    const toolResponse = await agent.complete([
      {
        role: 'user',
        content: `以下の問題に対する解決策を提供してください:
        カテゴリ: ${category}
        症状: ${symptom}
        難易度: ${difficultyLevel}
        
        pcTroubleshootingToolを使用して解決策を検索し、わかりやすく説明してください。`,
      },
    ]);

    return {
      response: toolResponse.text,
    };
  },
});

// PCサポートワークフロー
const pcSupportWorkflow = createWorkflow({
  id: 'pc-support-workflow',
  inputSchema: z.object({
    description: z.string().describe('ユーザーが報告した問題の説明'),
    userLevel: z.enum(['beginner', 'intermediate', 'advanced']).optional().describe('ユーザーの技術レベル'),
  }),
  outputSchema: z.object({
    response: z.string().describe('ユーザーへの回答'),
  }),
})
  .then(diagnoseProblem)
  .then(provideSolution);

pcSupportWorkflow.commit();

export { pcSupportWorkflow };