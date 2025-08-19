/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 本番環境ではリライトルールを無効化
  async rewrites() {
    // 開発環境でのみMastraとの連携を有効化
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/api/mastra/:path*',
          destination: 'http://localhost:3001/api/:path*', // Mastra APIのエンドポイント
        },
      ];
    }
    return [];
  },
  // 外部URLからのモジュールロードを許可
  webpack: (config, { isServer }) => {
    // ChromaDBの外部URLからのロードを許可
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
    };

    return config;
  },
  // 本番環境での画像最適化を無効化（必要に応じて）
  images: {
    unoptimized: true,
  },
  // 静的エクスポート設定（必要に応じて）
  output: 'standalone',
};

module.exports = nextConfig;