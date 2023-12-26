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
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
          port: '',
          pathname:"**",
        },
        {
          protocol: 'https',
          hostname: 'yt3.googleusercontent.com',
          port: '',
          pathname:"**",
        },
      ],
    },
  }