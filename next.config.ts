import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.builder.io",
      },
    ],
  }
};

export default nextConfig;
