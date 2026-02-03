import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  transpilePackages: ["reshaped"],
  experimental: {
    optimizePackageImports: ["reshaped"],
  },
  output: "export",
};

export default nextConfig;
