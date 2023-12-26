/** @type {import('next').NextConfig} */

const nextConfig = { images: { remotePatterns: [ { protocol: "https", hostname: "**", }, ], },reactStrictMode: false };

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.artic.edu',
          port: '',
          pathname:"**",
        },
      ],
    },
  }