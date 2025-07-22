'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatBot from '@/components/ui/ChatBot';

// 商品データの型定義
interface Product {
    id: string;
    name: string;
    category: 'pc' | 'peripherals' | 'parts';
    description: string;
    specs: string[];
    price: number;
    stock: number;
}

// ダミー商品データ
const products: Product[] = [
    {
        id: 'pc-001',
        name: 'ビジネスノートPC',
        category: 'pc',
        description: 'ビジネス用途に最適な高性能ノートパソコン。バッテリー持ちも良好です。',
        specs: ['Core i5 第8世代', '8GB RAM', 'SSD 256GB', '14インチフルHD液晶', 'Windows 10 Pro'],
        price: 29800,
        stock: 5
    },
    {
        id: 'pc-002',
        name: 'デスクトップPC',
        category: 'pc',
        description: '高性能デスクトップPC。動画編集やゲームにも対応可能です。',
        specs: ['Core i7 第9世代', '16GB RAM', 'SSD 512GB', 'HDD 1TB', 'Windows 10 Home'],
        price: 39800,
        stock: 3
    },
    {
        id: 'pc-003',
        name: 'スリムノートPC',
        category: 'pc',
        description: '薄型軽量で持ち運びに便利なノートPC。バッテリー駆動時間も長めです。',
        specs: ['Core i3 第10世代', '8GB RAM', 'SSD 128GB', '13.3インチ液晶', 'Windows 10 Home'],
        price: 24800,
        stock: 7
    },
    {
        id: 'peri-001',
        name: '液晶モニター 24インチ',
        category: 'peripherals',
        description: 'フルHD対応の24インチワイド液晶モニター。HDMI端子搭載。',
        specs: ['24インチ', 'フルHD(1920×1080)', 'HDMI×1、VGA×1', 'スピーカー内蔵'],
        price: 12800,
        stock: 10
    },
    {
        id: 'peri-002',
        name: 'ワイヤレスキーボード・マウスセット',
        category: 'peripherals',
        description: '使いやすいワイヤレスキーボードとマウスのセット。電池式で場所を選びません。',
        specs: ['日本語配列キーボード', 'ワイヤレスマウス', '単三電池使用', '2.4GHz帯無線方式'],
        price: 3980,
        stock: 15
    },
    {
        id: 'peri-003',
        name: 'レーザープリンター',
        category: 'peripherals',
        description: '高速印刷が可能なモノクロレーザープリンター。トナー付属。',
        specs: ['モノクロレーザー', '印刷速度：20枚/分', 'Wi-Fi対応', 'A4対応'],
        price: 15800,
        stock: 4
    },
    {
        id: 'part-001',
        name: 'SSD 512GB',
        category: 'parts',
        description: '高速読み書き可能なSATA接続SSD。起動時間が大幅に短縮されます。',
        specs: ['容量：512GB', 'SATA接続', '読込速度：最大560MB/s', '書込速度：最大510MB/s'],
        price: 8980,
        stock: 20
    },
    {
        id: 'part-002',
        name: 'メモリ 8GB',
        category: 'parts',
        description: 'デスクトップPC用のDDR4メモリ。マルチタスク処理が快適になります。',
        specs: ['DDR4-2666', '8GB', 'デスクトップPC用'],
        price: 4980,
        stock: 25
    },
    {
        id: 'part-003',
        name: 'グラフィックボード',
        category: 'parts',
        description: 'ゲームや動画編集に最適なミドルレンジグラフィックボード。',
        specs: ['VRAM：4GB', 'HDMI×2、DisplayPort×1', '補助電源必要'],
        price: 19800,
        stock: 6
    }
];

export default function ProductsPage() {
    // 選択されたカテゴリーの状態
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    // カテゴリーでフィルタリングした商品を取得
    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <main className="min-h-screen flex flex-col">
            <Header type="reuse" />

            <div className="flex-grow">
                {/* ヒーローセクション */}
                <section className="bg-reuse-primary text-white py-12">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">商品一覧</h1>
                        <p className="text-lg">高品質な中古パソコン・周辺機器・パーツを取り揃えています</p>
                    </div>
                </section>

                {/* 商品カテゴリーフィルター */}
                <section className="py-8 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`px-6 py-2 rounded-full ${selectedCategory === 'all' ? 'bg-reuse-primary text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
                            >
                                すべて
                            </button>
                            <button
                                onClick={() => setSelectedCategory('pc')}
                                className={`px-6 py-2 rounded-full ${selectedCategory === 'pc' ? 'bg-reuse-primary text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
                                id="pc"
                            >
                                中古パソコン
                            </button>
                            <button
                                onClick={() => setSelectedCategory('peripherals')}
                                className={`px-6 py-2 rounded-full ${selectedCategory === 'peripherals' ? 'bg-reuse-primary text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
                                id="peripherals"
                            >
                                周辺機器
                            </button>
                            <button
                                onClick={() => setSelectedCategory('parts')}
                                className={`px-6 py-2 rounded-full ${selectedCategory === 'parts' ? 'bg-reuse-primary text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
                                id="parts"
                            >
                                パーツ
                            </button>
                        </div>
                    </div>
                </section>

                {/* 商品リスト */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.map(product => (
                                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="h-48 bg-gray-200"></div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                                        <p className="text-gray-600 mb-4">{product.description}</p>
                                        <div className="mb-4">
                                            <h4 className="font-semibold mb-2">スペック</h4>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                {product.specs.map((spec, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="text-reuse-primary mr-2">•</span>
                                                        <span>{spec}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p className="font-bold text-xl text-reuse-primary">¥{product.price.toLocaleString()}</p>
                                            <span className={`text-sm px-2 py-1 rounded ${product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                {product.stock > 0 ? `在庫: ${product.stock}点` : '在庫切れ'}
                                            </span>
                                        </div>
                                        <div className="mt-4">
                                            <Link href={`/reuse/products/${product.id}`} className="block text-center bg-reuse-primary text-white px-4 py-2 rounded font-medium hover:bg-amber-600 transition-colors">
                                                詳細を見る
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* お問い合わせセクション */}
                <section className="py-16 bg-reuse-secondary">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">お探しの商品が見つからない場合</h2>
                        <p className="text-lg mb-8">在庫状況は日々変動しています。お探しの商品が見つからない場合は、お気軽にお問い合わせください。</p>
                        <Link href="/reuse/contact" className="bg-reuse-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
                            お問い合わせ
                        </Link>
                    </div>
                </section>
            </div>

            <Footer type="reuse" />

            {/* チャットボット */}
            <ChatBot />
        </main>
    );
}