import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
