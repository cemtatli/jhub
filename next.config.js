/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'kommunity.com',
      },
      {
        hostname: 'cdn.rareblocks.xyz',
      },
    ],
  },
}

module.exports = nextConfig
