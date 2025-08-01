'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header type="main" />

            <div className="flex-grow">
                {/* ヒーローセクション */}
                <section className="bg-gray-800 text-white py-12">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">利用規約</h1>
                        <p className="text-lg">サービス利用に関する規約</p>
                    </div>
                </section>

                {/* 利用規約内容 */}
                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-lg max-w-none">
                            <div className="mb-8">
                                <p className="text-gray-600 mb-6">
                                    この利用規約（以下「本規約」といいます）は、プロテクトサービス × リユース三昧（以下「当社」といいます）が提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。本サービスをご利用になる方（以下「利用者」といいます）は、本規約に同意いただいたものとみなします。
                                </p>
                                <p className="text-sm text-gray-500">制定日：2025年1月1日</p>
                            </div>

                            <div className="space-y-8">
                                <section>
                                    <h2 className="text-2xl font-bold mb-4">第1条（適用）</h2>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                        <li>本規約は、利用者と当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
                                        <li>当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下「個別規定」といいます）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。</li>
                                        <li>本規約の規定が前項の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。</li>
                                    </ol>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">第2条（利用登録）</h2>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                        <li>本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。</li>
                                        <li>当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
                                            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                                <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
                                                <li>本規約に違反したことがある者からの申請である場合</li>
                                                <li>その他、当社が利用登録を相当でないと判断した場合</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">第3条（禁止事項）</h2>
                                    <p className="text-gray-700 mb-4">利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                        <li>法令または公序良俗に違反する行為</li>
                                        <li>犯罪行為に関連する行為</li>
                                        <li>当社、本サービスの他の利用者、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                                        <li>当社のサービスの運営を妨害するおそれのある行為</li>
                                        <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
                                        <li>不正アクセスをし、またはこれを試みる行為</li>
                                        <li>他の利用者に成りすます行為</li>
                                        <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                                        <li>その他、当社が不適切と判断する行為</li>
                                    </ol>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">第4条（本サービスの提供の停止等）</h2>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                        <li>当社は、以下のいずれかの事由があると判断した場合、利用者に事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                                            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                                                <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                                                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                                                <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                                            </ul>
                                        </li>
                                        <li>当社は、本サービスの提供の停止または中断により、利用者または第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</li>
                                    </ol>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">第5条（著作権）</h2>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                        <li>利用者は、自ら著作権等の必要な知的財産権を有するか、または必要な権利者の許諾を得た文章、画像や映像等の情報に関してのみ、本サービスを利用し、投稿ないしアップロードすることができるものとします。</li>
                                        <li>利用者が本サービスを利用して投稿ないしアップロードした文章、画像、映像等の著作権については、当該利用者その他既存の権利者に留保されるものとします。ただし、当社は、本サービスを利用して投稿ないしアップロードされた文章、画像、映像等について、本サービスの改良、品質の向上、または不備の是正等ならびに本サービスの周知宣伝等に必要な範囲で利用できるものとし、利用者は、この利用に関して、著作者人格権を行使しないものとします。</li>
                                        <li>前項本文の定めるものを除き、本サービスおよび本サービスに関連する一切の情報についての著作権およびその他の知的財産権はすべて当社または当社にその利用を許諾した権利者に帰属し、利用者は無断で複製、譲渡、貸与、翻訳、改変、転載、公衆送信（送信可能化を含みます）、伝送、配布、出版、営業使用等をしてはならないものとします。</li>
                                    </ol>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">第6条（利用制限および登録抹消）</h2>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                        <li>当社は、利用者が以下のいずれかに該当する場合には、事前の通知なく、投稿データを削除し、利用者に対して本サービスの全部もしくは一部の利用を制限しまたは利用者としての登録を抹消することができるものとします。
                                            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                                <li>本規約のいずれかの条項に違反した場合</li>
                                                <li>登録事項に虚偽の事実があることが判明した場合</li>
                                                <li>料金等の支払債務の不履行があった場合</li>
                                                <li>当社からの連絡に対し、一定期間返答がない場合</li>
                                                <li>本サービスについて、最後の利用から一定期間利用がない場合</li>
                                                <li>その他、当社が本サービスの利用を適当でないと判断した場合</li>
                                            </ul>
                                        </li>
                                        <li>当社は、本条に基づき当社が行った行為により利用者に生じた損害について、一切の責任を負いません。</li>
                                    </ol>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">第7条（退会）</h2>
                                    <p className="text-gray-700">
                                        利用者は、当社の定める退会手続により、本サービスから退会できるものとします。
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">第8条（保証の否認および免責事項）</h2>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                        <li>当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます）がないことを明示的にも黙示的にも保証しておりません。</li>
                                        <li>当社は、本サービスに起因して利用者に生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する当社と利用者との間の契約（本規約を含みます）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。</li>
                                        <li>前項ただし書に定める場合であっても、当社は、当社の過失（重過失を除きます）による債務不履行または不法行為により利用者に生じた損害のうち特別な事情から生じた損害（当社または利用者が損害発生につき予見し、または予見し得た場合を含みます）について一切の責任を負いません。また、当社の過失（重過失を除きます）による債務不履行または不法行為により利用者に生じた損害の賠償は、利用者から当該損害が発生した月に受領した利用料の額を上限とします。</li>
                                        <li>当社は、本サービスに関して、利用者と他の利用者または第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。</li>
                                    </ol>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">第9条（サービス内容の変更等）</h2>
                                    <p className="text-gray-700">
                                        当社は、利用者に通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによって利用者に生じた損害について一切の責任を負いません。
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">第10条（利用規約の変更）</h2>
                                    <p className="text-gray-700">
                                        当社は、必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該利用者は変更後の規約に同意したものとみなします。
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">第11条（個人情報の取扱い）</h2>
                                    <p className="text-gray-700">
                                        当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">第12条（通知または連絡）</h2>
                                    <p className="text-gray-700">
                                        利用者と当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、利用者から、当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時に利用者へ到達したものとみなします。
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">第13条（権利義務の譲渡の禁止）</h2>
                                    <p className="text-gray-700">
                                        利用者は、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">第14条（準拠法・裁判管轄）</h2>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                        <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
                                        <li>本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</li>
                                    </ol>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold mb-4">お問い合わせ先</h2>
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