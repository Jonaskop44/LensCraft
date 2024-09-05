/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    CAPTCHA_SITEKEY: process.env.CAPTCHA_SITEKEY,
  },
};

module.exports = nextConfig;
