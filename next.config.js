/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ichef.bbci.co.uk"],
  },
  i18n:{
    locales: ["en", "es"],
    defaultLocale: "en"
  }
};

module.exports = nextConfig;
