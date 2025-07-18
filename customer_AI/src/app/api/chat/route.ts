import { NextRequest, NextResponse } from 'next/server';
import { searchSimilarDocuments } from '@/lib/simple-vector-store';
import { generateRagResponse } from '@/lib/gemini-client';
import { getFallbackResponse } from '@/lib/fallback-responses';

export async function POST(req: NextRequest) {
    try {
        // リクエストボディからメッセージを取得
        const { message } = await req.json();

        if (!message) {
            return NextResponse.json(
                { error: 'メッセージが必要です' },
                { status: 400 }
            );
        }

        try {
            // RAGモードを試す
            // 1. 関連ドキュメントの検索
            const documents = await searchSimilarDocuments(message, 2);

            // 2. 検索結果をコンテキストとして使用
            const context = documents.map(doc => `${doc.title}\n\n${doc.content}`).join('\n\n');

            // 3. RAGを使用して応答を生成
            const response = await generateRagResponse(message, context);

            // 4. 応答を返す
            return NextResponse.json({ response });
        } catch (ragError) {
            console.error('RAG mode failed, falling back to keyword matching:', ragError);

            // RAGモードが失敗した場合、フォールバックモードを使用
            const fallbackResponse = getFallbackResponse(message);
            return NextResponse.json({ response: fallbackResponse });
        }
    } catch (error) {
        console.error('Error processing request:', error);

        // 最終的なフォールバック
        const fallbackResponse = getFallbackResponse('エラー');
        return NextResponse.json({ response: fallbackResponse });
    }
}

// ベクトルストアの初期化を行うGETエンドポイント（デバッグ用）
export async function GET() {
    try {
        const documents = await searchSimilarDocuments('PCが起動しない', 1);
        return NextResponse.json({
            status: 'Vector store is ready',
            sample: documents.length > 0 ? documents[0].title : 'No documents found'
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Vector store initialization failed', details: (error as Error).message },
            { status: 500 }
        );
    }
}