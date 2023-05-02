/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dare4eibk/image/upload/**",
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dare4eibk/image/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;