'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatBot from '@/components/ui/ChatBot';

export default function ProtectServicesPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header type="protect" />

            <div className="flex-grow">
                {/* ヒーローセクション */}
                <section className="bg-protect-primary text-white py-12">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">サービス詳細</h1>
                        <p className="text-lg">お客様のニーズに合わせた最適なITサービスをご提供します</p>
                    </div>
                </section>

                {/* HP制作 */}
                <section className="py-16" id="hp">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center justify-center mb-8">
                                <div className="bg-protect-secondary rounded-full p-4 mr-4">
                                    <svg className="w-10 h-10 text-protect-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold">HP制作</h2>
                            </div>

                            <p className="text-lg text-gray-700 mb-8">
                                お客様のビジネスや活動を最大限に引き立てる、魅力的で機能的なウェブサイトを制作します。
                                デザインから実装、公開までワンストップでサポートいたします。
                            </p>

                            <div className="bg-gray-50 rounded-xl p-8 mb-8">
                                <h3 className="text-xl font-bold mb-4">サービス内容</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-protect-primary mr-3 font-bold">01.</span>
                                        <div>
                                            <h4 className="font-bold mb-1">ヒアリング・企画</h4>
                                            <p className="text-gray-600">お客様のニーズや目的をしっかりとヒアリングし、最適なウェブサイトの企画を提案します。</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-protect-primary mr-3 font-bold">02.</span>
                                        <div>
                                            <h4 className="font-bold mb-1">デザイン制作</h4>
                                            <p className="text-gray-600">ブランドイメージに合わせた、魅力的で使いやすいデザインを制作します。レスポンシブデザインで、スマートフォンやタブレットにも対応します。</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-protect-primary mr-3 font-bold">03.</span>
                                        <div>
                                            <h4 className="font-bold mb-1">コーディング・実装</h4>
                                            <p className="text-gray-600">最新の技術を用いて、高速で安定したウェブサイトを構築します。SEO対策も考慮した実装を行います。</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-protect-primary mr-3 font-bold">04.</span>
                                        <div>
                                            <h4 className="font-bold mb-1">公開・運用サポート</h4>
                                            <p className="text-gray-600">ドメイン取得やサーバー設定、公開後の運用サポートまで一貫してお手伝いします。</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-bold mb-3">料金目安</h3>
                                    <ul className="space-y-2">
                                        <li className="flex justify-between">
                                            <span>ランディングページ</span>
                                            <span className="font-semibold">¥50,000〜</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>コーポレートサイト（5〜10ページ）</span>
                                            <span className="font-semibold">¥150,000〜</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>ECサイト</span>
                                            <span className="font-semibold">¥300,000〜</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>WordPressカスタマイズ</span>
                                            <span className="font-semibold">¥100,000〜</span>
                                        </li>
                                    </ul>
                                    <p className="text-sm text-gray-500 mt-3">※具体的な料金は、サイトの規模や機能によって異なります。詳細はお問い合わせください。</p>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-bold mb-3">納期目安</h3>
                                    <ul className="space-y-2">
                                        <li className="flex justify-between">
                                            <span>ランディングページ</span>
                                            <span className="font-semibold">2〜3週間</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>コーポレートサイト</span>
                                            <span className="font-semibold">1〜2ヶ月</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>ECサイト</span>
                                            <span className="font-semibold">2〜3ヶ月</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>WordPressカスタマイズ</span>
                                            <span className="font-semibold">2〜4週間</span>
                                        </li>
                                    </ul>
                                    <p className="text-sm text-gray-500 mt-3">※納期は目安であり、プロジェクトの複雑さや規模によって変動します。</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <Link href="/protect-service/contact" className="inline-block bg-protect-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                    お問い合わせ・お見積り
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* パソコン保守 */}
                <section className="py-16 bg-gray-50" id="maintenance">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center justify-center mb-8">
                                <div className="bg-protect-secondary rounded-full p-4 mr-4">
                                    <svg className="w-10 h-10 text-protect-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold">パソコン保守</h2>
                            </div>

                            <p className="text-lg text-gray-700 mb-8">
                                お客様のIT環境を安全かつ効率的に維持するための保守サービスを提供します。
                                定期的なメンテナンスからトラブル対応まで、幅広くサポートいたします。
                            </p>

                            <div className="bg-white rounded-xl p-8 mb-8">
                                <h3 className="text-xl font-bold mb-4">サービス内容</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-protect-primary mr-3 font-bold">01.</span>
                                        <div>
                                            <h4 className="font-bold mb-1">定期メンテナンス</h4>
                                            <p className="text-gray-600">定期的なシステムチェックやソフトウェアアップデート、ウイルススキャンなどを行い、パソコンの動作を最適化します。</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-protect-primary mr-3 font-bold">02.</span>
                                        <div>
                                            <h4 className="font-bold mb-1">トラブルシューティング</h4>
                                            <p className="text-gray-600">パソコンの動作不良やエラーなど、様々なトラブルに対応します。原因を特定し、適切な解決策を提供します。</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-protect-primary mr-3 font-bold">03.</span>
                                        <div>
                                            <h4 className="font-bold mb-1">セキュリティ対策</h4>
                                            <p className="text-gray-600">ウイルス対策ソフトの導入や設定、セキュリティアップデートの適用など、安全なIT環境を維持するためのサポートを行います。</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-protect-primary mr-3 font-bold">04.</span>
                                        <div>
                                            <h4 className="font-bold mb-1">リモートサポート</h4>
                                            <p className="text-gray-600">遠隔操作によるサポートで、お客様の元に訪問することなく、迅速に問題解決をサポートします。</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-bold mb-3">料金プラン</h3>
                                    <ul className="space-y-2">
                                        <li className="flex justify-between">
                                            <span>スポット対応（1回）</span>
                                            <span className="font-semibold">¥5,000〜</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>月額サポート（個人）</span>
                                            <span className="font-semibold">¥3,000〜/月</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>月額サポート（法人）</span>
                                            <span className="font-semibold">¥10,000〜/月</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>リモートサポート（30分）</span>
                                            <span className="font-semibold">¥3,000</span>
                                        </li>
                                    </ul>
                                    <p className="text-sm text-gray-500 mt-3">※料金は対応内容や台数によって異なります。詳細はお問い合わせください。</p>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-bold mb-3">対応可能エリア</h3>
                                    <p className="text-gray-600 mb-3">
                                        島根県出雲市を中心に、松江市、安来市、雲南市などの近隣地域に対応しています。
                                        それ以外の地域については、リモートサポートでの対応が可能です。
                                    </p>
                                    <p className="text-gray-600">
                                        出張サポートの場合、交通費が別途発生する場合があります。
                                        詳細はお問い合わせください。
                                    </p>
                                </div>
                            </div>

                            <div className="text-center">
                                <Link href="/protect-service/contact" className="inline-block bg-protect-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                    お問い合わせ・お見積り
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* プログラミング相談 */}
                <section className="py-16" id="programming">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center justify-center mb-8">
                                <div className="bg-protect-secondary rounded-full p-4 mr-4">
                                    <svg className="w-10 h-10 text-protect-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold">プログラミング相談</h2>
                            </div>

                            <p className="text-lg text-gray-700 mb-8">
                                システム開発やプログラミングに関する技術的な相談に対応します。
                                初心者の方から上級者まで、幅広いレベルの方をサポートいたします。
                            </p>

                            <div className="bg-gray-50 rounded-xl p-8 mb-8">
                                <h3 className="text-xl font-bold mb-4">サービス内容</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-protect-primary mr-3 font-bold">01.</span>
                                        <div>
                                            <h4 className="font-bold mb-1">プログラミング学習サポート</h4>
                                            <p className="text-gray-600">プログラミング言語の基礎から応用まで、学習段階に合わせたサポートを提供します。</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-protect-primary mr-3 font-bold">02.</span>
                                        <div>
                                            <h4 className="font-bold mb-1">コードレビュー・デバッグ</h4>
                                            <p className="text-gray-600">既存のコードをレビューし、バグの修正や最適化のアドバイスを行います。</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-protect-primary mr-3 font-bold">03.</span>
                                        <div>
                                            <h4 className="font-bold mb-1">システム設計相談</h4>
                                            <p className="text-gray-600">アプリケーションやシステムの設計に関するアドバイスを提供します。</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-protect-primary mr-3 font-bold">04.</span>
                                        <div>
                                            <h4 className="font-bold mb-1">技術選定サポート</h4>
                                            <p className="text-gray-600">プロジェクトに最適な言語やフレームワーク、ツールの選定をサポートします。</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl p-8 mb-8">
                                <h3 className="text-xl font-bold mb-4">対応言語・技術</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="bg-gray-50 p-3 rounded text-center">
                                        <span className="font-medium">HTML/CSS</span>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded text-center">
                                        <span className="font-medium">JavaScript</span>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded text-center">
                                        <span className="font-medium">TypeScript</span>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded text-center">
                                        <span className="font-medium">React</span>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded text-center">
                                        <span className="font-medium">Vue.js</span>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded text-center">
                                        <span className="font-medium">Node.js</span>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded text-center">
                                        <span className="font-medium">PHP</span>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded text-center">
                                        <span className="font-medium">Python</span>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded text-center">
                                        <span className="font-medium">Java</span>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded text-center">
                                        <span className="font-medium">C#</span>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded text-center">
                                        <span className="font-medium">WordPress</span>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded text-center">
                                        <span className="font-medium">データベース</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-4">※上記以外の言語や技術についても対応可能な場合があります。お気軽にお問い合わせください。</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-bold mb-3">料金</h3>
                                    <ul className="space-y-2">
                                        <li className="flex justify-between">
                                            <span>オンライン相談（30分）</span>
                                            <span className="font-semibold">¥3,000</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>オンライン相談（60分）</span>
                                            <span className="font-semibold">¥5,000</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>対面相談（60分）</span>
                                            <span className="font-semibold">¥6,000</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>コードレビュー</span>
                                            <span className="font-semibold">¥10,000〜</span>
                                        </li>
                                    </ul>
                                    <p className="text-sm text-gray-500 mt-3">※料金は相談内容や難易度によって異なる場合があります。</p>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-bold mb-3">相談方法</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">•</span>
                                            <span>Zoom、Google Meet、Skypeなどのビデオ会議</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">•</span>
                                            <span>対面相談（島根県出雲市周辺）</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">•</span>
                                            <span>メールでの質問対応</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-protect-primary mr-2">•</span>
                                            <span>チャットツールでの相談</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="text-center">
                                <Link href="/protect-service/contact" className="inline-block bg-protect-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                    お問い合わせ・お見積り
                                </Link>
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