import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Uncomment and set if deploying to GitHub Pages under a repo path:
  // basePath: "/portfolio",
  // assetPrefix: "/portfolio",
};

export default nextConfig;
