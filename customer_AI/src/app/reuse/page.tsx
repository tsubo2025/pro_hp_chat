'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatBot from '@/components/ui/ChatBot';
import HeroSlideshow from '@/components/ui/HeroSlideshow';

export default function ReuseHome() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header type="reuse" />

      <div className="flex-grow">
        {/* ヒーローセクション */}
        <section className="bg-reuse-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">リユース三昧</h1>
            <p className="text-xl mb-8">高品質な中古パソコン・周辺機器・パーツを安心価格でご提供</p>
            <Link href="/reuse/contact" className="bg-white text-reuse-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              お問い合わせ
            </Link>
          </div>
        </section>

        {/* 商品カテゴリーセクション */}
        <section className="py-16" id="products">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">取扱商品</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 中古パソコン */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden" id="pc">
                <div className="h-40 bg-reuse-secondary flex items-center justify-center">
                  <svg className="w-20 h-20 text-reuse-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">中古パソコン</h3>
                  <p className="text-gray-600 mb-4">
                    厳選された高品質な中古パソコンを取り揃えています。ビジネス用からゲーミングPCまで、用途に合わせてお選びいただけます。すべての商品は動作確認済みで安心です。
                  </p>
                  <Link href="/reuse/products#pc" className="text-reuse-primary font-medium hover:underline">
                    詳細を見る →
                  </Link>
                </div>
              </div>

              {/* 周辺機器 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden" id="peripherals">
                <div className="h-40 bg-reuse-secondary flex items-center justify-center">
                  <svg className="w-20 h-20 text-reuse-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">周辺機器</h3>
                  <p className="text-gray-600 mb-4">
                    モニター、プリンター、キーボード、マウスなど、様々な周辺機器を取り扱っています。中古品ながら品質にこだわり、丁寧に検品しています。
                  </p>
                  <Link href="/reuse/products#peripherals" className="text-reuse-primary font-medium hover:underline">
                    詳細を見る →
                  </Link>
                </div>
              </div>

              {/* パーツ */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden" id="parts">
                <div className="h-40 bg-reuse-secondary flex items-center justify-center">
                  <svg className="w-20 h-20 text-reuse-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">パーツ販売</h3>
                  <p className="text-gray-600 mb-4">
                    メモリ、ストレージ、CPUなど、パソコンの各種パーツを販売しています。パソコンのアップグレードや修理に必要なパーツを手頃な価格でご提供します。
                  </p>
                  <Link href="/reuse/products#parts" className="text-reuse-primary font-medium hover:underline">
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
            <h2 className="text-3xl font-bold text-center mb-12">リユース三昧の特徴</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-reuse-primary rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">品質へのこだわり</h3>
                  <p className="text-gray-600">
                    すべての商品は厳しい検品基準をクリアした高品質な中古品です。安心してお使いいただけます。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-reuse-primary rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">安心価格</h3>
                  <p className="text-gray-600">
                    中古品だからこそ実現できる安心価格で、高品質な商品をご提供しています。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-reuse-primary rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">専門スタッフによるサポート</h3>
                  <p className="text-gray-600">
                    パソコンに詳しい専門スタッフが、お客様に最適な商品選びをサポートします。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-reuse-primary rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">アフターサポート</h3>
                  <p className="text-gray-600">
                    購入後のトラブルにも対応。安心してお使いいただけるよう、サポート体制を整えています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 商品ピックアップセクション */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">おすすめ商品</h2>

            <div className="grid md:grid-cols-4 gap-6">
              {/* 商品1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">ビジネスノートPC</h3>
                  <p className="text-sm text-gray-600 mb-2">Core i5・8GB RAM・SSD 256GB</p>
                  <p className="font-bold text-reuse-primary">¥29,800</p>
                </div>
              </div>

              {/* 商品2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">デスクトップPC</h3>
                  <p className="text-sm text-gray-600 mb-2">Core i7・16GB RAM・SSD 512GB</p>
                  <p className="font-bold text-reuse-primary">¥39,800</p>
                </div>
              </div>

              {/* 商品3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">液晶モニター 24インチ</h3>
                  <p className="text-sm text-gray-600 mb-2">フルHD・HDMI対応</p>
                  <p className="font-bold text-reuse-primary">¥12,800</p>
                </div>
              </div>

              {/* 商品4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">SSD 512GB</h3>
                  <p className="text-sm text-gray-600 mb-2">SATA接続・高速読み書き</p>
                  <p className="font-bold text-reuse-primary">¥8,980</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/reuse/products" className="bg-reuse-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
                商品一覧を見る
              </Link>
            </div>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section className="py-16 bg-reuse-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">お気軽にお問い合わせください</h2>
            <p className="text-lg mb-8">商品についてのご質問や在庫確認など、お気軽にお問い合わせください。</p>
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