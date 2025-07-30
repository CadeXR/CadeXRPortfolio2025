/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/CadeXRPortfolio2025',
  assetPrefix: '/CadeXRPortfolio2025/',
  images: {
    unoptimized: true,
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig 