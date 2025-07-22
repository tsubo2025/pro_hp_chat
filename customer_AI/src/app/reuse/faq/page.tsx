'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatBot from '@/components/ui/ChatBot';

// FAQ項目の型定義
interface FaqItem {
    id: string;
    question: string;
    answer: string;
    category: 'general' | 'products' | 'payment' | 'shipping' | 'support';
}

// FAQ項目のデータ
const faqItems: FaqItem[] = [
    {
        id: 'faq-1',
        question: '中古パソコンの保証はありますか？',
        answer: 'はい、当店で販売している中古パソコンには3ヶ月間の動作保証が付いています。保証期間内に正常な使用状態で故障した場合は、無償で修理または交換対応いたします。ただし、お客様の過失による故障や改造による不具合は保証対象外となります。',
        category: 'products'
    },
    {
        id: 'faq-2',
        question: '支払い方法は何がありますか？',
        answer: '銀行振込、クレジットカード決済、代金引換に対応しています。クレジットカードはVISA、MasterCard、JCB、American Express、Dinersがご利用いただけます。',
        category: 'payment'
    },
    {
        id: 'faq-3',
        question: '配送料はいくらですか？',
        answer: '商品合計が10,000円以上の場合は送料無料です。10,000円未満の場合は全国一律880円の送料をいただいております。離島など一部地域は追加料金が発生する場合があります。',
        category: 'shipping'
    },
    {
        id: 'faq-4',
        question: '注文からどのくらいで商品が届きますか？',
        answer: '在庫のある商品は、ご入金確認後1〜3営業日以内に発送いたします。お届けは発送後、地域によって1〜3日程度かかります。なお、カスタマイズが必要な商品は、別途お時間をいただく場合があります。',
        category: 'shipping'
    },
    {
        id: 'faq-5',
        question: '返品・交換はできますか？',
        answer: '商品到着後7日以内であれば、未使用・未開封の状態に限り返品・交換が可能です。ただし、お客様都合による返品の場合は、送料はお客様負担となります。商品に不具合があった場合は、当店負担で対応いたします。返品・交換をご希望の場合は、事前にお問い合わせください。',
        category: 'general'
    },
    {
        id: 'faq-6',
        question: '中古パソコンのOSは最新ですか？',
        answer: '当店の中古パソコンは、出荷前に最新のアップデートを適用しています。Windows 10搭載モデルについては、セキュリティアップデートまで適用した状態でお届けします。',
        category: 'products'
    },
    {
        id: 'faq-7',
        question: 'パソコンの初期設定やデータ移行はしてもらえますか？',
        answer: 'はい、有料オプションとして初期設定サポートやデータ移行サービスをご用意しています。詳細や料金については、お問い合わせください。',
        category: 'support'
    },
    {
        id: 'faq-8',
        question: '店舗はありますか？実際に商品を見ることはできますか？',
        answer: '実店舗は構えておりませんが、事前にご連絡いただければ、島根県出雲市の事務所にて商品をご覧いただくことは可能です。在庫状況や対応可能な日時については、お電話またはメールでお問い合わせください。',
        category: 'general'
    },
    {
        id: 'faq-9',
        question: '法人での購入は可能ですか？',
        answer: 'はい、法人のお客様もご購入いただけます。請求書払いなど、法人向けのお支払い方法にも対応しております。また、複数台のご購入の場合は別途お見積りいたしますので、お問い合わせください。',
        category: 'payment'
    },
    {
        id: 'faq-10',
        question: '故障したパソコンの修理も行っていますか？',
        answer: '当店で購入された商品に限り、修理対応を行っています。保証期間外の場合は有料となります。他店で購入された商品の修理については、状況に応じて対応可能な場合がありますので、詳細はお問い合わせください。',
        category: 'support'
    }
];

export default function FaqPage() {
    // 選択されたカテゴリーの状態
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    // カテゴリーでフィルタリングしたFAQ項目を取得
    const filteredFaqs = selectedCategory === 'all'
        ? faqItems
        : faqItems.filter(item => item.category === selectedCategory);

    // アコーディオンの開閉状態
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

    // アコーディオンの開閉を切り替える関数
    const toggleAccordion = (id: string) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <main className="min-h-screen flex flex-col">
            <Header type="reuse" />

            <div className="flex-grow">
                {/* ヒーローセクション */}
                <section className="bg-reuse-primary text-white py-12">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">よくある質問</h1>
                        <p className="text-lg">お客様からよくいただくご質問をまとめました</p>
                    </div>
                </section>

                {/* FAQカテゴリーフィルター */}
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
                                onClick={() => setSelectedCategory('general')}
                                className={`px-6 py-2 rounded-full ${selectedCategory === 'general' ? 'bg-reuse-primary text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
                            >
                                一般的な質問
                            </button>
                            <button
                                onClick={() => setSelectedCategory('products')}
                                className={`px-6 py-2 rounded-full ${selectedCategory === 'products' ? 'bg-reuse-primary text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
                            >
                                商品について
                            </button>
                            <button
                                onClick={() => setSelectedCategory('payment')}
                                className={`px-6 py-2 rounded-full ${selectedCategory === 'payment' ? 'bg-reuse-primary text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
                            >
                                支払いについて
                            </button>
                            <button
                                onClick={() => setSelectedCategory('shipping')}
                                className={`px-6 py-2 rounded-full ${selectedCategory === 'shipping' ? 'bg-reuse-primary text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
                            >
                                配送について
                            </button>
                            <button
                                onClick={() => setSelectedCategory('support')}
                                className={`px-6 py-2 rounded-full ${selectedCategory === 'support' ? 'bg-reuse-primary text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
                            >
                                サポートについて
                            </button>
                        </div>
                    </div>
                </section>

                {/* FAQ一覧 */}
                <section className="py-12">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="space-y-4">
                            {filteredFaqs.map(item => (
                                <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                                    <button
                                        onClick={() => toggleAccordion(item.id)}
                                        className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="font-semibold text-lg">{item.question}</span>
                                        <svg
                                            className={`w-5 h-5 transition-transform ${openItems[item.id] ? 'transform rotate-180' : ''}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    {openItems[item.id] && (
                                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                                            <p className="text-gray-700">{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* お問い合わせセクション */}
                <section className="py-16 bg-reuse-secondary">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">質問が解決しませんか？</h2>
                        <p className="text-lg mb-8">お探しの回答が見つからない場合は、お気軽にお問い合わせください。</p>
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