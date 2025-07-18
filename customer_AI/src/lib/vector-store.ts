import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';
import { Chroma } from '@langchain/community/vectorstores/chroma';
import { Document } from '@langchain/core/documents';
import { pcSupportKnowledge } from './knowledge-base';

// 環境変数からAPIキーを取得
const apiKey = process.env.GOOGLE_API_KEY;

// Google AI Embeddings
const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: apiKey || '',
    modelName: 'embedding-001', // Google AIの埋め込みモデル
});

// メモリ内ベクトルストアのインスタンス
let vectorStore: Chroma | null = null;

// ベクトルストアの初期化
export async function initVectorStore() {
    if (vectorStore) return vectorStore;

    try {
        console.log('Initializing vector store...');

        // 知識ベースからドキュメントを作成
        const documents = pcSupportKnowledge.map(
            (item) => new Document({
                pageContent: `${item.title}\n\n${item.content}`,
                metadata: { id: item.id, title: item.title }
            })
        );

        // Chromaベクトルストアを作成
        vectorStore = await Chroma.fromDocuments(documents, embeddings, {
            collectionName: 'pc-support-knowledge',
            url: undefined, // インメモリで実行
        });

        console.log('Vector store initialized successfully');
        return vectorStore;
    } catch (error) {
        console.error('Failed to initialize vector store:', error);
        throw error;
    }
}

// 類似ドキュメントの検索
export async function searchSimilarDocuments(query: string, k: number = 3) {
    try {
        const store = await initVectorStore();
        const results = await store.similaritySearch(query, k);
        return results;
    } catch (error) {
        console.error('Error searching similar documents:', error);
        return [];
    }
}