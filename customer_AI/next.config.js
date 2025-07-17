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
};

module.exports = nextConfig;