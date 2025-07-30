/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/CadeXRPortfolio2025' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/CadeXRPortfolio2025/' : '',
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig 