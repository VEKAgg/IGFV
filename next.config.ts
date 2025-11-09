import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  
  productionBrowserSourceMaps: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
