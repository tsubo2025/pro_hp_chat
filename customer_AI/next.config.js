/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Mastraとの連携のためにAPIルートを有効化
  async rewrites() {
    return [
      {
        source: '/api/mastra/:path*',
        destination: 'http://localhost:3001/api/:path*', // Mastra APIのエンドポイント
      },
    ];
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