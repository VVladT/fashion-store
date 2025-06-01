import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com"
      },
      {
        protocol: "https",
        hostname: "pravatar.cc"
      },
      {
        protocol: "https",
        hostname: "placeimg.com"
      }
    ]
  }
};

export default nextConfig;
