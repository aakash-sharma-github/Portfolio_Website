/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVICE_KEY: process.env.SERVICE_KEY,
    TEMPLATE_KEY: process.env.TEMPLATE_KEY,
    PUBLIC_KEY: process.env.PUBLIC_KEY
  }
};

module.exports = nextConfig;
