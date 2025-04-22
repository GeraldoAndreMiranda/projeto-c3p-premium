/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['undici'],
  output: 'export',
  images: {
    unoptimized: true
  },
  swcMinify: false
};

module.exports = nextConfig;