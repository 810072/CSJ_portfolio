/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

const repoName = 'CSJ_portfolio';

const nextConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = !isDev;

  console.log(`[Next.Config] Mode: ${isDev ? 'Development' : 'Production'}`);

  return {
    output: 'export',

    // In Dev: empty. in Prod: /repoName
    basePath: isProd ? `/${repoName}` : '',

    // Usually basePath is enough for assets too.
    // Explicitly setting assetPrefix can double-prefix if not careful, 
    // but useful if basePath is set. ensuring it matches basePath.
    assetPrefix: isProd ? `/${repoName}` : '',

    images: {
      unoptimized: true,
    },

    // Explicitly handle trailing slashes for GitHub Pages compatibility
    trailingSlash: true,

    // Disable the dev indicator (lightning icon)
    devIndicators: {
      buildActivity: false,
      appIsrStatus: false,
    },
  };
};

export default nextConfig;