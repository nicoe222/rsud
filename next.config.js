/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'www.your-domain-name.com',
    ]
  },
}

module.exports = nextConfig
