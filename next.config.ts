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
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@/blocks': path.resolve(__dirname, 'src/blocks'),
      '@/components': path.resolve(__dirname, 'src/components'),
    };
    
    // Important: return the modified config
    return config;
  },
};

export default nextConfig;
