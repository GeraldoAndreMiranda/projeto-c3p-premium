/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@firebase/storage'],
  experimental: {
    esmExternals: false
  },
  images: {
    unoptimized: true
  },
  output: 'export'
};

module.exports = nextConfig;
