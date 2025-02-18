import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {hostname: "static.independent.co.uk",},
    ],
  }
};

export default nextConfig;
