/**
 * GitHub Pages serves the site from a subpath (asifshadman98-crypto.github.io/portfolio),
 * so the CI workflow sets DEPLOY_TARGET=github-pages to enable static export + basePath.
 * Local dev and normal builds are unaffected.
 */
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(isGithubPages && {
    output: "export",
    basePath: "/portfolio",
    images: { unoptimized: true },
  }),
};

export default nextConfig;
