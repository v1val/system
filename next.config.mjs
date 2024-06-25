import('next').NextConfig

const nextConfig = {
  reactStrictMode: false,
  distDir: './dist',
  images: { unoptimized: true }
}

export default nextConfig