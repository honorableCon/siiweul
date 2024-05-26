/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PAYMENT_TOKEN: process.env.PAYMENT_TOKEN,
  },
};

export default nextConfig;
