import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "trizio.ru"
      },
      {
        hostname: "cdn0.divan.ru"
      },
    ],
  },
};

export default nextConfig;
