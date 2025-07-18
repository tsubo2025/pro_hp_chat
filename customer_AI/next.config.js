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
};

module.exports = nextConfig;