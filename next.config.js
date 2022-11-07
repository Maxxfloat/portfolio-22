module.exports = {
  swcMinify: true,
  i18n: {
    locales: ["fa", "en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        port: "",
        pathname: "/gh/devicons/devicon/icons/**",
      },
    ],
  },
};
