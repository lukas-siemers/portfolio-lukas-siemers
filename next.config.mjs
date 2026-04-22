/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: build produces an `out/` folder that can be served
  // by any static host (Caddy, Nginx, S3, etc.) — no Node runtime.
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Static export can't run the Next image optimizer at request time,
    // so ship images as-is.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
