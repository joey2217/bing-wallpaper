module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://123.207.32.32:9001/:path*' // Proxy to Backend
      }
    ]
  }
}