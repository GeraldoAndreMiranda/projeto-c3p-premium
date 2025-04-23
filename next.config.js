/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@firebase/storage'],
  experimental: {
    esmExternals: false
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;

