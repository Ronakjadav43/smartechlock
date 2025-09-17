import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.smartechlock.codenvision.in",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.wsj.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dev.admin.spba.asme.org.sg",
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
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;












// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // output: "export",
//   images: {
//     // You can use domains for simple hostnames
//     domains: ['localhost'],

//     // remotePatterns is for more complex patterns
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "www.smartechlock.codenvision.in",
//         port: "1337",
//         // pathname: "/static/**",
//          pathname: "/uploads/**",
//       },
//       {
//         protocol: "https",
//         hostname: "images.wsj.net",
//         port: "",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "dev.admin.spba.asme.org.sg",
//         port: "",
//         pathname: "/**",
//       },
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "1337",
//         pathname: "/uploads/**",
//       },
//       {
//         protocol: "https",
//         hostname: "scontent.cdninstagram.com",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;
