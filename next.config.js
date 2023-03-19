/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'rsud.vercel.com',
    ]
  },
}

module.exports = nextConfig
