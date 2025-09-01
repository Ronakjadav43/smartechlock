import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // You can use domains for simple hostnames
    domains: ['localhost'],

    // remotePatterns is for more complex patterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.asme.org.sg",
        port: "",
        pathname: "/static/**",
      },
      {
        protocol: "https",
        hostname: "images.wsj.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dev.admin.spba.asme.org.sg",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
