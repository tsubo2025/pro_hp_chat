'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
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
    images: string[];
    condition: string;
    warranty: string;
    features: string[];
}

// ダミー商品データ（実際のアプリケーションではAPIから取得）
const products: { [key: string]: Product } = {
    'pc-001': {
        id: 'pc-001',
        name: 'ビジネスノートPC',
        category: 'pc',
        description: 'ビジネス用途に最適な高性能ノートパソコン。バッテリー持ちも良好で、外出先での作業にも最適です。Microsoft Office付属で、すぐにお仕事を始められます。',
        specs: [
            'CPU: Intel Core i5 第8世代',
            'メモリ: 8GB DDR4',
            'ストレージ: SSD 256GB',
            'ディスプレイ: 14インチフルHD液晶',
            'OS: Windows 10 Pro',
            'バッテリー: 約8時間駆動',
            'インターフェース: USB 3.0×2、HDMI×1、有線LAN×1'
        ],
        price: 29800,
        stock: 5,
        images: [],
        condition: '良好（使用感少なめ）',
        warranty: '3ヶ月間の動作保証',
        features: [
            'Microsoft Office 2019付属',
            'ウイルス対策ソフト導入済み',
            '初期設定完了済み',
            'クリーニング・動作確認済み'
        ]
    },
    'pc-002': {
        id: 'pc-002',
        name: 'デスクトップPC',
        category: 'pc',
        description: '高性能デスクトップPC。動画編集やゲームにも対応可能な性能を持ちながら、お手頃価格でご提供します。拡張性も高く、将来的なアップグレードにも対応できます。',
        specs: [
            'CPU: Intel Core i7 第9世代',
            'メモリ: 16GB DDR4',
            'ストレージ: SSD 512GB + HDD 1TB',
            'グラフィック: 内蔵グラフィック',
            'OS: Windows 10 Home',
            'インターフェース: USB 3.0×4、USB 2.0×2、HDMI×1、DVI×1'
        ],
        price: 39800,
        stock: 3,
        images: [],
        condition: '良好',
        warranty: '3ヶ月間の動作保証',
        features: [
            '大容量ストレージ',
            'メモリ増設可能',
            'グラフィックボード増設可能',
            'クリーニング・動作確認済み'
        ]
    },
    'peri-001': {
        id: 'peri-001',
        name: '液晶モニター 24インチ',
        category: 'peripherals',
        description: 'フルHD対応の24インチワイド液晶モニター。HDMI端子搭載で、パソコンだけでなくゲーム機やメディアプレーヤーとの接続も可能です。',
        specs: [
            'サイズ: 24インチワイド',
            '解像度: フルHD(1920×1080)',
            '接続端子: HDMI×1、VGA×1',
            'スピーカー: 内蔵',
            '応答速度: 5ms',
            'コントラスト比: 1000:1'
        ],
        price: 12800,
        stock: 10,
        images: [],
        condition: '良好',
        warranty: '1ヶ月間の動作保証',
        features: [
            'フルHD高画質',
            'HDMI対応',
            'スピーカー内蔵',
            'VESA規格対応'
        ]
    },
    'part-001': {
        id: 'part-001',
        name: 'SSD 512GB',
        category: 'parts',
        description: '高速読み書き可能なSATA接続SSD。従来のHDDと比較して起動時間が大幅に短縮され、アプリケーションの動作も快適になります。',
        specs: [
            '容量: 512GB',
            'インターフェース: SATA 6Gb/s',
            '読込速度: 最大560MB/s',
            '書込速度: 最大510MB/s',
            'フォームファクタ: 2.5インチ',
            'MTBF: 150万時間'
        ],
        price: 8980,
        stock: 20,
        images: [],
        condition: '良好',
        warranty: '1ヶ月間の動作保証',
        features: [
            '高速データ転送',
            '省電力設計',
            '静音動作',
            '耐衝撃性に優れる'
        ]
    }
};

export default function ProductDetailPage() {
    const params = useParams();
    const productId = params.id as string;
    const product = products[productId];

    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    if (!product) {
        return (
            <main className="min-h-screen flex flex-col">
                <Header type="reuse" />
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">商品が見つかりません</h1>
                        <Link href="/reuse/products" className="bg-reuse-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-amber-600 transition-colors">
                            商品一覧に戻る
                        </Link>
                    </div>
                </div>
                <Footer type="reuse" />
            </main>
        );
    }

    const handleQuantityChange = (change: number) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1 && newQuantity <= product.stock) {
            setQuantity(newQuantity);
        }
    };

    return (
        <main className="min-h-screen flex flex-col">
            <Header type="reuse" />

            <div className="flex-grow">
                {/* パンくずナビ */}
                <section className="py-4 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <nav className="text-sm">
                            <Link href="/" className="text-gray-500 hover:text-gray-700">ホーム</Link>
                            <span className="mx-2 text-gray-400">/</span>
                            <Link href="/reuse" className="text-gray-500 hover:text-gray-700">リユース三昧</Link>
                            <span className="mx-2 text-gray-400">/</span>
                            <Link href="/reuse/products" className="text-gray-500 hover:text-gray-700">商品一覧</Link>
                            <span className="mx-2 text-gray-400">/</span>
                            <span className="text-gray-700">{product.name}</span>
                        </nav>
                    </div>
                </section>

                {/* 商品詳細 */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* 商品画像 */}
                            <div>
                                <div className="bg-gray-200 rounded-lg mb-4 h-96 flex items-center justify-center">
                                    <span className="text-gray-500 text-lg">商品画像</span>
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    {[1, 2, 3, 4].map((index) => (
                                        <div
                                            key={index}
                                            className={`bg-gray-200 rounded h-20 flex items-center justify-center cursor-pointer ${selectedImage === index - 1 ? 'ring-2 ring-reuse-primary' : ''}`}
                                            onClick={() => setSelectedImage(index - 1)}
                                        >
                                            <span className="text-gray-500 text-xs">画像{index}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 商品情報 */}
                            <div>
                                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

                                <div className="flex items-center mb-6">
                                    <span className="text-3xl font-bold text-reuse-primary mr-4">¥{product.price.toLocaleString()}</span>
                                    <span className={`px-3 py-1 rounded text-sm ${product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {product.stock > 0 ? `在庫: ${product.stock}点` : '在庫切れ'}
                                    </span>
                                </div>

                                <p className="text-gray-700 mb-6">{product.description}</p>

                                <div className="mb-6">
                                    <h3 className="text-lg font-bold mb-3">商品の特徴</h3>
                                    <ul className="space-y-2">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-reuse-primary mr-2">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">商品状態</h4>
                                        <p className="text-sm text-gray-600">{product.condition}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">保証</h4>
                                        <p className="text-sm text-gray-600">{product.warranty}</p>
                                    </div>
                                </div>

                                {product.stock > 0 && (
                                    <div className="mb-6">
                                        <h4 className="font-semibold mb-3">数量</h4>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center border border-gray-300 rounded">
                                                <button
                                                    onClick={() => handleQuantityChange(-1)}
                                                    className="px-3 py-2 hover:bg-gray-100"
                                                    disabled={quantity <= 1}
                                                >
                                                    -
                                                </button>
                                                <span className="px-4 py-2 border-l border-r border-gray-300">{quantity}</span>
                                                <button
                                                    onClick={() => handleQuantityChange(1)}
                                                    className="px-3 py-2 hover:bg-gray-100"
                                                    disabled={quantity >= product.stock}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <span className="text-gray-600">合計: ¥{(product.price * quantity).toLocaleString()}</span>
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-3">
                                    {product.stock > 0 ? (
                                        <>
                                            <button className="w-full bg-reuse-primary text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
                                                カートに追加
                                            </button>
                                            <Link href="/reuse/contact" className="block w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold text-center hover:bg-gray-300 transition-colors">
                                                お問い合わせ
                                            </Link>
                                        </>
                                    ) : (
                                        <Link href="/reuse/contact" className="block w-full bg-gray-400 text-white py-3 rounded-lg font-semibold text-center">
                                            在庫切れ - お問い合わせ
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 商品仕様 */}
                <section className="py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-8">商品仕様</h2>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <table className="w-full">
                                <tbody>
                                    {product.specs.map((spec, index) => {
                                        const [key, value] = spec.split(': ');
                                        return (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                                <td className="px-6 py-4 font-medium text-gray-900 w-1/3">{key}</td>
                                                <td className="px-6 py-4 text-gray-700">{value}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 関連商品 */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-8">関連商品</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            {Object.values(products)
                                .filter(p => p.id !== product.id && p.category === product.category)
                                .slice(0, 4)
                                .map(relatedProduct => (
                                    <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <div className="h-32 bg-gray-200"></div>
                                        <div className="p-4">
                                            <h3 className="font-bold mb-2">{relatedProduct.name}</h3>
                                            <p className="font-bold text-reuse-primary mb-2">¥{relatedProduct.price.toLocaleString()}</p>
                                            <Link href={`/reuse/products/${relatedProduct.id}`} className="block text-center bg-reuse-primary text-white px-4 py-2 rounded font-medium hover:bg-amber-600 transition-colors text-sm">
                                                詳細を見る
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
            </div>

            <Footer type="reuse" />

            {/* チャットボット */}
            <ChatBot />
        </main>
    );
}