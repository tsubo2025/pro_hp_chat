'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatBot from '@/components/ui/ChatBot';
import HeroSlideshow from '@/components/ui/HeroSlideshow';

export default function ProtectServiceHome() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header type="protect" />

            <div className="flex-grow">
                {/* ヒーローセクション */}
                <section className="relative text-white py-20">
                    <div className="absolute inset-0 w-full h-full">
                        <HeroSlideshow
                            images={[
                                '/images/protect/slide_win10_support.png',
                                '/images/protect/slide_pc_repair.png',
                                '/images/protect/slide_ai_training.png',
                            ]}
                            type="protect"
                        />
                    </div>
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">プロテクトサービス</h1>
                        <p className="text-xl mb-8">HP制作・パソコン保守・プログラミング相談のサービスをご提供</p>
                        <Link href="/protect-service/contact" className="bg-white text-protect-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            お問い合わせ
                        </Link>
                    </div>
                </section>

                {/* サービス紹介セクション */}
                <section className="py-16" id="services">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">サービス内容</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* HP制作 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden" id="hp">
                                <div className="h-40 bg-protect-secondary flex items-center justify-center">
                                    <svg className="w-20 h-20 text-protect-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">HP制作</h3>
                                    <p className="text-gray-600 mb-4">
                                        お客様のニーズに合わせた魅力的なウェブサイトを制作します。レスポンシブデザインで、スマートフォンやタブレットにも対応。SEO対策も万全です。
                                    </p>
                                    <Link href="/protect-service/services#hp" className="text-protect-primary font-medium hover:underline">
                                        詳細を見る →
                                    </Link>
                                </div>
                            </div>

                            {/* パソコン保守 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden" id="maintenance">
                                <div className="h-40 bg-protect-secondary flex items-center justify-center">
                                    <svg className="w-20 h-20 text-protect-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">パソコン保守</h3>
                                    <p className="text-gray-600 mb-4">
                                        定期的なメンテナンスやトラブル対応、セキュリティ対策など、お客様のIT環境を安全かつ効率的に維持します。リモートサポートも可能です。
                                    </p>
                                    <Link href="/protect-service/services#maintenance" className="text-protect-primary font-medium hover:underline">
                                        詳細を見る →
                                    </Link>
                                </div>
                            </div>

                            {/* プログラミング相談 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden" id="programming">
                                <div className="h-40 bg-protect-secondary flex items-center justify-center">
                                    <svg className="w-20 h-20 text-protect-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">プログラミング相談</h3>
                                    <p className="text-gray-600 mb-4">
                                        システム開発やプログラミングに関する技術的な相談に対応します。初心者から上級者まで、幅広いレベルの方をサポートします。
                                    </p>
                                    <Link href="/protect-service/services#programming" className="text-protect-primary font-medium hover:underline">
                                        詳細を見る →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 特徴セクション */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">プロテクトサービスの特徴</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex items-start">
                                <div className="bg-protect-primary rounded-full p-3 mr-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">経験豊富なスタッフ</h3>
                                    <p className="text-gray-600">
                                        IT業界での豊富な経験を持つスタッフが、お客様の課題解決をサポートします。
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-protect-primary rounded-full p-3 mr-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">品質へのこだわり</h3>
                                    <p className="text-gray-600">
                                        お客様に満足いただけるよう、高品質なサービスの提供にこだわっています。
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-protect-primary rounded-full p-3 mr-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">迅速な対応</h3>
                                    <p className="text-gray-600">
                                        お問い合わせやトラブル発生時には、迅速に対応いたします。
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-protect-primary rounded-full p-3 mr-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">丁寧なサポート</h3>
                                    <p className="text-gray-600">
                                        初心者の方にもわかりやすく、丁寧にサポートいたします。
                                    </p>
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

            {/* チャットボット */}
            <ChatBot />
        </main>
    );
}