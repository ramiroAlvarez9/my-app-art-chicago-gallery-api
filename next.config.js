/** @type {import('next').NextConfig} */

const nextConfig = { images: { remotePatterns: [ { protocol: "https", hostname: "**", }, ], }, };

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