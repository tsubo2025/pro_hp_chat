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
              {/* ロゴ画像 */}
              <div className="mr-3">
                {type === 'protect' && (
                  <Image
                    src="/images/logos/protect-logo.svg"
                    alt="プロテクトサービス"
                    width={150}
                    height={45}
                    priority
                  />
                )}
                {type === 'reuse' && (
                  <Image
                    src="/images/logos/reuse-logo.svg"
                    alt="リユース三昧"
                    width={150}
                    height={45}
                    priority
                  />
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

          <nav>
            <ul className="flex space-x-6">
              {getNavItems().map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}