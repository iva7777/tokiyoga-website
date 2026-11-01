/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: process.env.DOCKER_BUILD === "true" ? "standalone" : undefined,
}

export default nextConfig
