/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
      'ts1.mm.bing.net',
      'ts2.mm.bing.net',
      'ts4.mm.bing.net',
      'ts3.mm.bing.net',
    ],
  },
};

module.exports = nextConfig;
