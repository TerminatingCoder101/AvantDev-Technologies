const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: isProd ? '/AvantDev-Technologies' : '',
  assetPrefix: isProd ? '/AvantDev-Technologies' : ''
}

module.exports = nextConfig;