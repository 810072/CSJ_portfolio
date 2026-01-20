/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'CSJ_portfolio';

const nextConfig = {
  output: 'export',

  // Only apply basePath and assetPrefix in production (GitHub Pages)
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}` : '',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;