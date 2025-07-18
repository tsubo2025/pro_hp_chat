import { GoogleGenerativeAI } from '@google/generative-ai';
import { pcSupportKnowledge } from './knowledge-base';

// 環境変数からAPIキーを取得
const apiKey = process.env.GOOGLE_API_KEY || '';

// Google AI クライアントの初期化
const genAI = new GoogleGenerativeAI(apiKey);

// 埋め込みモデル
const embeddingModel = genAI.getGenerativeModel({ model: 'embedding-001' });

// ドキュメントとその埋め込みを保存する配列
interface DocumentWithEmbedding {
    id: string;
    title: string;
    content: string;
    embedding?: number[];
}

// インメモリベクトルストア
let documents: DocumentWithEmbedding[] = [];
let isInitialized = false;

// テキストの埋め込みを取得
async function getEmbedding(text: string): Promise<number[]> {
    try {
        const result = await embeddingModel.embedContent({
            content: { parts: [{ text }] },
        });
        return result.embedding.values;
    } catch (error) {
        console.error('Error getting embedding:', error);
        // エラーが発生した場合は空の埋め込みを返す
        return [];
    }
}

// コサイン類似度を計算
function cosineSimilarity(vecA: number[], vecB: number[]): number {
    if (vecA.length !== vecB.length) return 0;

    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < vecA.length; i++) {
        dotProduct += vecA[i] * vecB[i];
        normA += vecA[i] * vecA[i];
        normB += vecB[i] * vecB[i];
    }

    if (normA === 0 || normB === 0) return 0;

    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// ベクトルストアの初期化
export async function initVectorStore(): Promise<boolean> {
    if (isInitialized) return true;

    try {
        console.log('Initializing simple vector store...');

        // 知識ベースからドキュメントを作成
        documents = pcSupportKnowledge.map(item => ({
            id: item.id,
            title: item.title,
            content: item.content,
        }));

        // 各ドキュメントの埋め込みを計算（最初の3つだけ）
        // 本番環境では全てのドキュメントの埋め込みを計算する
        for (let i = 0; i < documents.length; i++) {
            const doc = documents[i];
            const text = `${doc.title}\n\n${doc.content}`;
            documents[i].embedding = await getEmbedding(text);
            console.log(`Generated embedding for document ${i + 1}/${documents.length}`);
        }

        isInitialized = true;
        console.log('Vector store initialized successfully');
        return true;
    } catch (error) {
        console.error('Failed to initialize vector store:', error);
        return false;
    }
}

// 類似ドキュメントの検索
export async function searchSimilarDocuments(query: string, k: number = 3): Promise<DocumentWithEmbedding[]> {
    try {
        // ベクトルストアが初期化されていない場合は初期化
        if (!isInitialized) {
            const success = await initVectorStore();
            if (!success) return [];
        }

        // クエリの埋め込みを取得
        const queryEmbedding = await getEmbedding(query);

        // 各ドキュメントとの類似度を計算
        const similarities = documents.map(doc => {
            if (!doc.embedding) return { doc, similarity: 0 };
            const similarity = cosineSimilarity(queryEmbedding, doc.embedding);
            return { doc, similarity };
        });

        // 類似度でソート
        similarities.sort((a, b) => b.similarity - a.similarity);

        // 上位k件を返す
        return similarities.slice(0, k).map(item => item.doc);
    } catch (error) {
        console.error('Error searching similar documents:', error);

        // エラーが発生した場合は、キーワードマッチングでフォールバック
        const results = documents.filter(doc =>
            doc.title.toLowerCase().includes(query.toLowerCase()) ||
            doc.content.toLowerCase().includes(query.toLowerCase())
        ).slice(0, k);

        return results;
    }
}