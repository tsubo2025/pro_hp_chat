import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

// PCサポート用の知識ベース（実際の実装ではデータベースやAPIから取得する）
const knowledgeBase = {
  'windows-startup': {
    title: 'Windowsの起動問題',
    symptoms: ['PCが起動しない', 'ブルースクリーン', '起動が遅い', 'ロゴ画面で止まる'],
    solutions: [
      {
        title: 'セーフモードでの起動確認',
        steps: [
          'PCを再起動し、起動中に[F8]キーを連打する',
          '「詳細ブートオプション」画面から「セーフモード」を選択',
          'セーフモードで起動できるか確認する'
        ],
        difficulty: 'easy'
      },
      {
        title: 'システム修復ディスクを使用',
        steps: [
          'Windowsインストールメディアを挿入',
          '「コンピューターの修復」を選択',
          '「トラブルシューティング」→「詳細オプション」→「スタートアップ修復」を選択'
        ],
        difficulty: 'medium'
      },
      {
        title: 'システムの復元',
        steps: [
          'セーフモードで起動',
          '「コントロールパネル」→「システムとセキュリティ」→「システム」→「システムの保護」を開く',
          '「システムの復元」をクリックし、以前の復元ポイントを選択'
        ],
        difficulty: 'medium'
      }
    ]
  },
  'internet-connection': {
    title: 'インターネット接続の問題',
    symptoms: ['インターネットに接続できない', 'Wi-Fiに接続できない', '接続が不安定', 'ウェブサイトが表示されない'],
    solutions: [
      {
        title: 'ネットワーク設定のリセット',
        steps: [
          'スタートメニュー→「設定」→「ネットワークとインターネット」を開く',
          '「ネットワークのリセット」を選択',
          '「今すぐリセット」をクリックし、PCを再起動'
        ],
        difficulty: 'easy'
      },
      {
        title: 'ルーターの再起動',
        steps: [
          'ルーターの電源を切る',
          '30秒ほど待つ',
          'ルーターの電源を入れ直し、ランプが正常に点灯するまで待つ',
          'PCでインターネット接続を試す'
        ],
        difficulty: 'easy'
      },
      {
        title: 'DNSキャッシュのクリア',
        steps: [
          'コマンドプロンプトを管理者として実行',
          '「ipconfig /flushdns」と入力してEnterキーを押す',
          '「正常に完了しました」というメッセージを確認'
        ],
        difficulty: 'medium'
      }
    ]
  },
  'software-issues': {
    title: 'ソフトウェアの問題',
    symptoms: ['アプリが起動しない', 'アプリがクラッシュする', 'インストールできない', 'アンインストールできない'],
    solutions: [
      {
        title: 'アプリの再インストール',
        steps: [
          '「設定」→「アプリ」→「アプリと機能」を開く',
          '問題のアプリを選択し「アンインストール」をクリック',
          'PCを再起動後、アプリを再インストール'
        ],
        difficulty: 'easy'
      },
      {
        title: 'プログラムの互換性トラブルシューティング',
        steps: [
          'アプリのショートカットを右クリック',
          '「プロパティ」→「互換性」タブを選択',
          '「互換性トラブルシューティングを実行する」をクリック',
          '画面の指示に従って設定'
        ],
        difficulty: 'medium'
      },
      {
        title: 'Windowsアップデートの確認',
        steps: [
          '「設定」→「更新とセキュリティ」→「Windows Update」を開く',
          '「更新プログラムのチェック」をクリック',
          '利用可能な更新プログラムをインストール',
          'PCを再起動'
        ],
        difficulty: 'easy'
      }
    ]
  },
  'hardware-issues': {
    title: 'ハードウェアの問題',
    symptoms: ['デバイスが認識されない', 'プリンターが印刷しない', 'USBデバイスが動作しない', '画面表示がおかしい'],
    solutions: [
      {
        title: 'デバイスドライバーの更新',
        steps: [
          'デバイスマネージャーを開く（Windowsキー+Xを押し、「デバイスマネージャー」を選択）',
          '問題のデバイスを右クリック',
          '「ドライバーの更新」→「ドライバーソフトウェアの自動検索」を選択'
        ],
        difficulty: 'medium'
      },
      {
        title: 'ハードウェアのトラブルシューティング',
        steps: [
          '「設定」→「更新とセキュリティ」→「トラブルシューティング」を開く',
          '「ハードウェアとデバイス」を選択',
          '「トラブルシューティングを実行する」をクリック'
        ],
        difficulty: 'easy'
      },
      {
        title: '物理的な接続の確認',
        steps: [
          'デバイスのケーブルが正しく接続されているか確認',
          '別のUSBポートに接続してみる',
          '別のケーブルで試してみる'
        ],
        difficulty: 'easy'
      }
    ]
  },
  'system-performance': {
    title: 'システムパフォーマンスの問題',
    symptoms: ['PCの動作が遅い', 'フリーズする', 'ファンの音が大きい', 'バッテリーの消費が早い'],
    solutions: [
      {
        title: 'ディスククリーンアップ',
        steps: [
          'エクスプローラーでCドライブを右クリック',
          '「プロパティ」→「ディスククリーンアップ」をクリック',
          '削除するファイルを選択し「OK」をクリック'
        ],
        difficulty: 'easy'
      },
      {
        title: '不要なスタートアッププログラムの無効化',
        steps: [
          'タスクマネージャーを開く（Ctrl+Shift+Escキー）',
          '「スタートアップ」タブを選択',
          '不要なプログラムを右クリックし「無効にする」を選択'
        ],
        difficulty: 'medium'
      },
      {
        title: 'システムファイルチェッカーの実行',
        steps: [
          'コマンドプロンプトを管理者として実行',
          '「sfc /scannow」と入力してEnterキーを押す',
          'スキャンが完了するまで待つ（時間がかかる場合があります）'
        ],
        difficulty: 'medium'
      }
    ]
  }
};

export const pcTroubleshootingTool = createTool({
  id: 'pc-troubleshooting',
  description: 'PCの問題を診断し、解決策を提供するツール',
  inputSchema: z.object({
    problemCategory: z.enum(['windows-startup', 'internet-connection', 'software-issues', 'hardware-issues', 'system-performance']).describe('問題のカテゴリ'),
    symptom: z.string().describe('具体的な症状の説明'),
    difficultyLevel: z.enum(['easy', 'medium', 'advanced']).optional().describe('ユーザーの技術レベルに合わせた解決策の難易度'),
  }),
  outputSchema: z.object({
    category: z.string(),
    matchedSymptoms: z.array(z.string()),
    solutions: z.array(z.object({
      title: z.string(),
      steps: z.array(z.string()),
      difficulty: z.string(),
    })),
    additionalInfo: z.string().optional(),
  }),
  execute: async ({ context }) => {
    const { problemCategory, symptom, difficultyLevel = 'medium' } = context;
    
    // 知識ベースから該当カテゴリの情報を取得
    const categoryInfo = knowledgeBase[problemCategory];
    
    if (!categoryInfo) {
      return {
        category: '不明なカテゴリ',
        matchedSymptoms: [],
        solutions: [],
        additionalInfo: '申し訳ありませんが、このカテゴリの情報は見つかりませんでした。別のカテゴリで試すか、より具体的な症状を教えてください。'
      };
    }
    
    // 症状のマッチング
    const matchedSymptoms = categoryInfo.symptoms.filter(s => 
      symptom.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(symptom.toLowerCase())
    );
    
    // 難易度でフィルタリング
    let filteredSolutions = categoryInfo.solutions;
    if (difficultyLevel === 'easy') {
      filteredSolutions = categoryInfo.solutions.filter(s => s.difficulty === 'easy');
    } else if (difficultyLevel === 'medium') {
      filteredSolutions = categoryInfo.solutions.filter(s => s.difficulty === 'easy' || s.difficulty === 'medium');
    }
    
    // 解決策が見つからない場合
    if (filteredSolutions.length === 0) {
      filteredSolutions = categoryInfo.solutions.slice(0, 1); // 少なくとも1つは返す
    }
    
    return {
      category: categoryInfo.title,
      matchedSymptoms: matchedSymptoms.length > 0 ? matchedSymptoms : categoryInfo.symptoms,
      solutions: filteredSolutions,
      additionalInfo: matchedSymptoms.length === 0 
        ? '症状の完全一致は見つかりませんでしたが、このカテゴリの一般的な解決策を提案します。'
        : undefined
    };
  },
});