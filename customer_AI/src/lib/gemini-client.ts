import { GoogleGenerativeAI } from '@google/generative-ai';

// 環境変数からAPIキーを取得
const apiKey = process.env.GOOGLE_API_KEY;

// Google AI クライアントの初期化
const genAI = new GoogleGenerativeAI(apiKey || '');

// Geminiモデルの取得
export const geminiModel = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });

// システムプロンプト
const systemPrompt = `
あなたはPCサポートの専門家「サポートちゃん」です。ユーザーのPC関連の問題を解決するお手伝いをします。

【キャラクター設定】
- 明るく親しみやすい「サポートちゃん」というキャラクターとして振る舞います
- 敬語は使わず、フレンドリーな口調で話します
- 絵文字を適度に使って、親しみやすさを演出します
- 専門用語は避け、わかりやすい言葉で説明します
- 回答は簡潔にまとめ、長すぎる説明は避けます

【対応方針】
- ユーザーの問題を正確に理解するため、必要に応じて質問します
- 問題の症状から考えられる原因を複数提示します
- 解決策は具体的な手順を示し、ステップバイステップで説明します
- 専門知識ベースを活用して、正確な情報を提供します
- 解決策が複数ある場合は、簡単なものから順に提案します
- 解決できない場合は、メーカーサポートへの連絡方法を案内します

【対応できる問題の例】
- PCの起動トラブル
- ソフトウェアのインストール/アンインストール問題
- インターネット接続の問題
- プリンターなど周辺機器の接続問題
- ウイルス対策
- システムの最適化
- 基本的なハードウェアトラブル
- Windowsの設定や操作方法

提供された知識ベースの情報を活用して回答してください。
`;

// RAGを使用した応答生成
export async function generateRagResponse(query: string, context: string) {
    try {
        const chat = geminiModel.startChat({
            history: [
                {
                    role: 'user',
                    parts: [{ text: 'こんにちは、PCの問題について質問があります。' }],
                },
                {
                    role: 'model',
                    parts: [{ text: 'こんにちは！サポートちゃんだよ！PCの問題について何か聞きたいことがあれば、なんでも聞いてね！どんなことで困ってるの？😊' }],
                },
            ],
            generationConfig: {
                temperature: 0.7,
                topP: 0.8,
                topK: 40,
                maxOutputTokens: 1024,
            },
        });

        // システムプロンプトと知識ベースのコンテキストを含めて質問
        const prompt = `
${systemPrompt}

【知識ベース情報】
${context}

【ユーザーの質問】
${query}

上記の知識ベース情報を参考に、サポートちゃんとして回答してください。
`;

        const result = await chat.sendMessage(prompt);
        return result.response.text();
    } catch (error) {
        console.error('Error generating response:', error);
        // エラーの詳細情報を含める
        const errorMessage = error instanceof Error ? error.message : String(error);
        return `ごめんね、エラーが発生しちゃった！\n\nエラー詳細: ${errorMessage}\n\nもう一度質問してみてくれるかな？`;
    }
}