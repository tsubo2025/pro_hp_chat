'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header type="main" />

            <div className="flex-grow">
                {/* ヒーローセクション */}
                <section className="bg-gray-800 text-white py-12">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">プライバシーポリシー</h1>
                        <p className="text-lg">個人情報の取り扱いについて</p>
                    </div>
                </section>

                {/* プライバシーポリシー内容 */}
                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-lg max-w-none">
                            <div className="mb-8">
                                <p className="text-gray-600 mb-6">
                                    プロテクトサービス × リユース三昧（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務と考え、個人情報の保護に関する法律、その他の関係法令等を遵守し、お客様の個人情報を適切に取り扱います。
                                </p>
                                <p className="text-sm text-gray-500">制定日：2025年1月1日</p>
                            </div>

                            <div className="space-y-8">
                                <section>
                                    <h2 className="text-2xl font-bold mb-4">1. 個人情報の定義</h2>
                                    <p className="text-gray-700 mb-4">
                                        本プライバシーポリシーにおいて「個人情報」とは、個人情報の保護に関する法律に定める「個人情報」を指し、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）を指します。
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">2. 個人情報の収集方法</h2>
                                    <p className="text-gray-700 mb-4">
                                        当社は、以下の方法により個人情報を収集いたします：
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>お問い合わせフォームからの入力</li>
                                        <li>サービス申込時の情報入力</li>
                                        <li>電話やメールでのお問い合わせ</li>
                                        <li>商品購入時の情報入力</li>
                                        <li>その他、当社サービス利用時の情報入力</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">3. 個人情報の利用目的</h2>
                                    <p className="text-gray-700 mb-4">
                                        当社は、収集した個人情報を以下の目的で利用いたします：
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>お客様からのお問い合わせへの対応</li>
                                        <li>サービスの提供・運営</li>
                                        <li>商品の販売・配送</li>
                                        <li>アフターサポートの提供</li>
                                        <li>新サービス・商品のご案内</li>
                                        <li>統計データの作成（個人を特定できない形式）</li>
                                        <li>その他、お客様との連絡・確認</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">4. 個人情報の第三者提供</h2>
                                    <p className="text-gray-700 mb-4">
                                        当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません：
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>法令に基づく場合</li>
                                        <li>人の生命、身体または財産の保護のために必要がある場合</li>
                                        <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                                        <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">5. 個人情報の管理</h2>
                                    <p className="text-gray-700 mb-4">
                                        当社は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行います。
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">6. 個人情報の開示・訂正・削除</h2>
                                    <p className="text-gray-700 mb-4">
                                        お客様ご本人から個人情報の開示・訂正・削除等をお求めいただいた場合には、遅滞なく対応させていただきます。お手続きについては、下記のお問い合わせ先までご連絡ください。
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">7. Cookieの使用について</h2>
                                    <p className="text-gray-700 mb-4">
                                        当社のウェブサイトでは、お客様により良いサービスを提供するため、Cookieを使用する場合があります。Cookieは、お客様のコンピュータを識別することはできますが、お客様個人を識別することはできません。
                                    </p>
                                    <p className="text-gray-700">
                                        Cookieの使用を希望されない場合は、ブラウザの設定でCookieを無効にすることができますが、一部のサービスが正常に機能しない場合があります。
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">8. プライバシーポリシーの変更</h2>
                                    <p className="text-gray-700 mb-4">
                                        当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当社ウェブサイトに掲載したときから効力を生じるものとします。
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">9. お問い合わせ先</h2>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <p className="text-gray-700 mb-2">
                                            <strong>プロテクトサービス × リユース三昧</strong>
                                        </p>
                                        <p className="text-gray-700 mb-2">
                                            所在地：島根県出雲市佐田町
                                        </p>
                                        <p className="text-gray-700 mb-2">
                                            電話：080-3577-3848
                                        </p>
                                        <p className="text-gray-700 mb-2">
                                            メール：info@protect-reuse.com
                                        </p>
                                        <p className="text-gray-700">
                                            営業時間：10:00〜18:00（平日）
                                        </p>
                                    </div>
                                </section>
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                                <Link href="/" className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                                    トップページに戻る
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer type="main" />
        </main>
    );
}