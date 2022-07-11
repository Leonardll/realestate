module.exports = {
  debug: true,
  defaultLocale: "es-ES",
  locales: ["es-ES", "en-US"],
  localeDetection: true,
  reloadOnPrerender: process.env.NODE_ENV === "development",

  // "pages": {
  //     "*": ["common"],
  //     "/ourServices/conciergerie": ["conciergerie"],
  //     "/ourServices/realEstate": ["realEstate"]
  // }
};
