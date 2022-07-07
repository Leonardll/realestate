module.exports = {
  locales: ["es-ES", "en-US"],
  defaultLocale: "es-ES",
  reloadOnPrerender: process.env.NODE_ENV === "development",
  pages: {
    "*": ["common"],
    "/ourServices/conciergerie": ["conciergerie"],
    "/ourServices/realEstate": ["realEstate"],
  },
};
