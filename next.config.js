/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '**.bing.com',
      },
      {
        hostname: '**.qhimg.com',
      },
    ],
  },
}

module.exports = nextConfig