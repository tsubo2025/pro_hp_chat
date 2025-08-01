'use client';

import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  type?: 'main' | 'protect' | 'reuse';
}

export default function Header({ type = 'main' }: HeaderProps) {
  // ヘッダーのスタイルとナビゲーションをタイプに応じて変更
  const getHeaderStyle = () => {
    switch (type) {
      case 'protect':
        return 'bg-protect-primary text-white';
      case 'reuse':
        return 'bg-reuse-primary text-white';
      default:
        return 'bg-gradient-to-r from-protect-primary to-reuse-primary text-white';
    }
  };

  const getNavItems = () => {
    switch (type) {
      case 'protect':
        return [
          { name: 'ホーム', href: '/protect-service' },
          { name: 'サービス紹介', href: '/protect-service/services' },
          { name: '料金・実績', href: '/protect-service/pricing' },
          { name: 'ブログ', href: '/protect-service/blog' },
          { name: 'お問い合わせ', href: '/protect-service/contact' },
        ];
      case 'reuse':
        return [
          { name: 'ホーム', href: '/reuse' },
          { name: '商品一覧', href: '/reuse/products' },
          { name: '商品状態・購入方法', href: '/reuse/how-to-buy' },
          { name: 'よくある質問', href: '/reuse/faq' },
          { name: 'お問い合わせ', href: '/reuse/contact' },
        ];
      default:
        return [
          { name: 'プロテクトサービス', href: '/protect-service' },
          { name: 'リユース三昧', href: '/reuse' },
        ];
    }
  };

  return (
    <header className={`${getHeaderStyle()} shadow-md`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* テキストロゴ */}
              <div className="mr-3">
                {type === 'protect' && (
                  <h1 className="text-2xl font-bold">プロテクトサービス</h1>
                )}
                {type === 'reuse' && (
                  <h1 className="text-2xl font-bold">リユース三昧</h1>
                )}
                {type === 'main' && (
                  <Image
                    src="/images/logos/support-chan_top.svg"
                    alt="プロテクトサービス × リユース三昧"
                    width={150}
                    height={45}
                    priority
                  />
                )}
              </div>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <nav className="mr-4">
              {type === 'main' ? (
                <div className="flex space-x-4">
                  <Link href="/protect-service" className="bg-white text-protect-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    🔧 プロテクトサービスへ
                  </Link>
                  <Link href="/reuse" className="bg-white text-reuse-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    🛍️ リユース三昧へ
                  </Link>
                </div>
              ) : (
                <ul className="flex space-x-6">
                  {getNavItems().map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="hover:underline">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </nav>

            {/* 電話番号カード */}
            <div className="bg-white rounded-lg shadow-md px-4 py-2 flex items-center">
              <div className="mr-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500">電話番号はこちら</div>
                <div className="text-sm font-bold text-gray-800">080-3577-3848</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}