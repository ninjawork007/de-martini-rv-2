/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: "http",
        hostname: process.env.ADMIN_HOSTNAME,
        // port: "1337",
        // pathname: '/upload/**',
      },
    ],
  },
};

module.exports = nextConfig;
