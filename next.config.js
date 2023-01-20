/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/beers',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: '',
        hostname: '',
        port: '',
        pathname: '/beer/**',
      },
    ],
  },
};


module.exports = nextConfig;
