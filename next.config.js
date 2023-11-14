/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '**.bing.com',
      },
    ],
  },
}

module.exports = nextConfig
