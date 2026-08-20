/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/precision-lead-finder",
        destination: "/capabilities",
        statusCode: 301,
      },
      {
        source: "/programmatic-media-buying",
        destination: "/capabilities",
        statusCode: 301,
      },
    ]
  },
}

export default nextConfig
