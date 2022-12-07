/** @type {import('next').NextConfig} */
const nextConfig = module.exports = {
  // serverRuntimeConfig: {
  //   API_URL: process.env.API_URL,
  // },
  // Will be available on both server and client
  publicRuntimeConfig: {
    NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_GOOGLE_PRIVATE_KEY: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY,
    NEXT_PUBLIC_GOOGLE_SHEET_ID: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID
  }
}

module.exports = nextConfig
