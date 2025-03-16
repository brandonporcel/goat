import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {hostname: "static.independent.co.uk",},
      {hostname: "static.standard.co.uk",},
      {hostname: "media.gettyimages.com",},
    ],
  }
};

export default nextConfig;
