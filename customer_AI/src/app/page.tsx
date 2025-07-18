'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header type="main" />

      <div className="flex-grow">
        {/* ヒーローセクション */}
        <section className="bg-gradient-to-r from-protect-primary to-reuse-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">プロテクトサービス × リユース三昧</h1>
            <p className="text-xl mb-8">IT関連の様々なサービスをご提供しています</p>
          </div>
        </section>

        {/* サービス紹介セクション */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">2つのサービスをご提供しています</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* プロテクトサービス */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-protect-primary text-white p-6">
                  <h3 className="text-2xl font-bold">プロテクトサービス</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-protect-primary mr-2">✓</span>
                      <span>HP制作 - 魅力的なウェブサイトを作成</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-protect-primary mr-2">✓</span>
                      <span>パソコン保守 - 安定したIT環境を維持</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-protect-primary mr-2">✓</span>
                      <span>プログラミング相談 - 技術的な課題を解決</span>
                    </li>
                  </ul>
                  <Link href="/protect-service" className="block text-center bg-protect-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    詳細を見る
                  </Link>
                </div>
              </div>

              {/* リユース三昧 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-reuse-primary text-white p-6">
                  <h3 className="text-2xl font-bold">リユース三昧</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-reuse-primary mr-2">✓</span>
                      <span>中古パソコン - 厳選された高品質PC</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-reuse-primary mr-2">✓</span>
                      <span>周辺機器 - モニター、プリンターなど</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-reuse-primary mr-2">✓</span>
                      <span>パーツ販売 - メモリ、ストレージなど</span>
                    </li>
                  </ul>
                  <Link href="/reuse" className="block text-center bg-reuse-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
                    詳細を見る
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">お気軽にお問い合わせください</h2>
            <p className="text-lg mb-8">サービスについてのご質問や見積もりのご依頼など、お気軽にお問い合わせください。</p>
            <div className="flex justify-center">
              <Link href="/contact" className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                お問い合わせ
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer type="main" />
    </main>
  );
}