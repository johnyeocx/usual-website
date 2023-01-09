/** @type {import('next').NextConfig} */
const nextConfig = {

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },

  env: {
    NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_GOOGLE_PRIVATE_KEY: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY,
    NEXT_PUBLIC_GOOGLE_SHEET_ID: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID
  },
  // serverRuntimeConfig: {
  //   API_URL: process.env.API_URL,
  // },
  // Will be available on both server and client
  publicRuntimeConfig: {
    NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_GOOGLE_PRIVATE_KEY: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY,
    NEXT_PUBLIC_GOOGLE_SHEET_ID: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID
  },

  images: {
    loader: 'default',
    domains: ['usual.s3.eu-west-2.amazonaws.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/webp'],
  },
}

module.exports = nextConfig


