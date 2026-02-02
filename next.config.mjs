/** @type {import('next').NextConfig} */
const repoName = "olaamigo";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repoName}` : "";
const assetPrefix = isProd ? `https://prabesh-regmi.github.io/${repoName}/` : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
