/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/petanque-and-chill-CA.fr',
  assetPrefix: '/petanque-and-chill-CA.fr',
  trailingSlash: true,
};

module.exports = nextConfig;
