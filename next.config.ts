import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.builder.io',
      },
    ],
  },
  output: 'standalone',
  turbopack: {}, // This is essential
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
