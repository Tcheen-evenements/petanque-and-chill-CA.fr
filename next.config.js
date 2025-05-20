/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS ? '/petanque-and-chill-CA.fr' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/petanque-and-chill-CA.fr' : ''
};

module.exports = nextConfig;
