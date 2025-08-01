'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PricingPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header type="protect" />

            <div className="flex-grow">
                {/* ヒーローセクション */}
                <section className="bg-protect-primary text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">料金・実績</h1>
                        <p className="text-lg mb-0">透明性のある料金体系と実績のご紹介</p>
                    </div>
                </section>

                {/* 料金プランセクション */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">料金プラン</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* HP制作 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="bg-protect-primary text-white p-6 text-center">
                                    <h3 className="text-2xl font-bold">HP制作</h3>
                                </div>
                                <div className="p-6">
                                    <div className="text-center mb-6">
                                        <span className="text-4xl font-bold">¥150,000〜</span>
                                        <span className="text-gray-600 block mt-2">※規模により異なります</span>
                                    </div>

                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">✓</span>
                                            <span>オリジナルデザイン</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">✓</span>
                                            <span>レスポンシブ対応</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">✓</span>
                                            <span>SEO対策</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">✓</span>
                                            <span>CMS導入</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">✓</span>
                                            <span>1年間の保守サポート</span>
                                        </li>
                                    </ul>

                                    <Link href="/protect-service/contact" className="block text-center bg-protect-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                        お問い合わせ
                                    </Link>
                                </div>
                            </div>

                            {/* パソコン保守 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="bg-protect-primary text-white p-6 text-center">
                                    <h3 className="text-2xl font-bold">パソコン保守</h3>
                                </div>
                                <div className="p-6">
                                    <div className="text-center mb-6">
                                        <span className="text-4xl font-bold">¥5,000〜</span>
                                        <span className="text-gray-600 block mt-2">月額 / 1台あたり</span>
                                    </div>

                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">✓</span>
                                            <span>定期メンテナンス</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">✓</span>
                                            <span>ウイルス対策</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">✓</span>
                                            <span>データバックアップ</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">✓</span>
                                            <span>リモートサポート</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">✓</span>
                                            <span>24時間365日対応</span>
                                        </li>
                                    </ul>

                                    <Link href="/protect-service/contact" className="block text-center bg-protect-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                        お問い合わせ
                                    </Link>
                                </div>
                            </div>

                            {/* プログラミング相談 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="bg-protect-primary text-white p-6 text-center">
                                    <h3 className="text-2xl font-bold">プログラミング相談</h3>
                                </div>
                                <div className="p-6">
                                    <div className="text-center mb-6">
                                        <span className="text-4xl font-bold">¥10,000〜</span>
                                        <span className="text-gray-600 block mt-2">1時間あたり</span>
                                    </div>

                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">✓</span>
                                            <span>技術相談</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">✓</span>
                                            <span>コードレビュー</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">✓</span>
                                            <span>バグ修正サポート</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">✓</span>
                                            <span>アルゴリズム設計</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">✓</span>
                                            <span>オンライン対応可</span>
                                        </li>
                                    </ul>

                                    <Link href="/protect-service/contact" className="block text-center bg-protect-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                        お問い合わせ
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 実績セクション */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">実績</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* 実績カード1 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="h-48 bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-500 text-lg">実績画像</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">株式会社〇〇様</h3>
                                    <p className="text-gray-600 mb-4">コーポレートサイトのリニューアル</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">HP制作</span>
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">レスポンシブ</span>
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">WordPress</span>
                                    </div>
                                </div>
                            </div>

                            {/* 実績カード2 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="h-48 bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-500 text-lg">実績画像</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">〇〇商事様</h3>
                                    <p className="text-gray-600 mb-4">社内システムの保守・運用</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">パソコン保守</span>
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">ネットワーク構築</span>
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">セキュリティ対策</span>
                                    </div>
                                </div>
                            </div>

                            {/* 実績カード3 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="h-48 bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-500 text-lg">実績画像</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">〇〇ショップ様</h3>
                                    <p className="text-gray-600 mb-4">ECサイトの構築</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">HP制作</span>
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">EC構築</span>
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">決済システム</span>
                                    </div>
                                </div>
                            </div>

                            {/* 実績カード4 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="h-48 bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-500 text-lg">実績画像</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">〇〇スタジオ様</h3>
                                    <p className="text-gray-600 mb-4">予約システムの開発</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">プログラミング</span>
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">システム開発</span>
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">API連携</span>
                                    </div>
                                </div>
                            </div>

                            {/* 実績カード5 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="h-48 bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-500 text-lg">実績画像</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">〇〇協会様</h3>
                                    <p className="text-gray-600 mb-4">会員管理システムの構築</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">プログラミング</span>
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">データベース</span>
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">セキュリティ</span>
                                    </div>
                                </div>
                            </div>

                            {/* 実績カード6 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="h-48 bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-500 text-lg">実績画像</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">〇〇学園様</h3>
                                    <p className="text-gray-600 mb-4">校内ネットワークの整備</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">パソコン保守</span>
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">ネットワーク</span>
                                        <span className="bg-protect-secondary text-protect-primary text-xs px-3 py-1 rounded-full">Wi-Fi構築</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* お問い合わせセクション */}
                <section className="py-16 bg-protect-secondary">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">お気軽にお問い合わせください</h2>
                        <p className="text-lg mb-8">サービスについてのご質問や見積もりのご依頼など、お気軽にお問い合わせください。</p>
                        <Link href="/protect-service/contact" className="bg-protect-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            お問い合わせ
                        </Link>
                    </div>
                </section>
            </div>

            <Footer type="protect" />
        </main>
    );
}