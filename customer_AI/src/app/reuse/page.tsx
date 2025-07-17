'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ReuseHome() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header type="reuse" />
      
      <div className="flex-grow">
        {/* ヒーローセクション */}
        <section className="bg-reuse-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">リユース三昧</h1>
            <p className="text-xl mb-8">高品質な中古パソコン・周辺機器を安心価格でご提供</p>
            <Link href="/reuse/products" className="bg-white text-reuse-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              商品を見る
            </Link>
          </div>
        </section>

        {/* 商品カテゴリセクション */}
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
                    ビジネス向けの高品質な中古パソコンを取り揃えています。動作確認済みで安心してご利用いただけます。
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
                    <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">周辺機器</h3>
                  <p className="text-gray-600 mb-4">
                    モニター、プリンター、キーボード、マウスなど、様々な周辺機器を取り扱っています。
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
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">パーツ</h3>
                  <p className="text-gray-600 mb-4">
                    メモリ、ハードディスク、SSDなど、パソコンのアップグレードに必要なパーツを販売しています。
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
                  <h3 className="text-xl font-bold mb-2">品質保証</h3>
                  <p className="text-gray-600">
                    すべての商品は動作確認済みで、一定期間の保証付きです。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-reuse-primary rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">迅速な発送</h3>
                  <p className="text-gray-600">
                    ご注文後、最短で翌営業日に発送いたします。
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
                    高品質な商品を、お求めやすい価格でご提供しています。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-reuse-primary rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">アフターサポート</h3>
                  <p className="text-gray-600">
                    購入後のトラブルや疑問点にも丁寧に対応いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section className="py-16 bg-reuse-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">お気軽にお問い合わせください</h2>
            <p className="text-lg mb-8">商品についてのご質問や在庫確認など、お気軽にお問い合わせください。</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link href="/reuse/contact" className="bg-reuse-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
                お問い合わせ
              </Link>
              <Link href="https://line.me/" className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                LINEで問い合わせ
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer type="reuse" />
    </main>
  );
}