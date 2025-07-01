import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: false, // 👈 evita este error en tiempo de build
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.apple.com",
      },
      {
        protocol: "https",
        hostname: "arrichetta.com.ar",
      },
      {
        protocol: "https",
        hostname: "acdn-us.mitiendanube.com",
      },
      {
        protocol: "https",
        hostname: "www.megatone.net",
      },
      {
        protocol: "https",
        hostname: "aihome.com.my",
      },
      {
        protocol: "https",
        hostname: "png.pngtree.com",
      },
      {
        protocol: "https",
        hostname: "images.samsung.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "store.google.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
    ],
  },
};

export default nextConfig;
