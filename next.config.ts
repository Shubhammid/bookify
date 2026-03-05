import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb",
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "covers.openlibrary.org" },
      { protocol: "https", hostname: "lspfdyhgsrgsxcju.public.blob.vercel-storage.com" },
      { protocol: "https", hostname: "dv3mgkuuu2uzj90t.public.blob.vercel-storage.com" }, // add this
    ],
  },
};

export default nextConfig;