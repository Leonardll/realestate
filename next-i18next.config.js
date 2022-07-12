module.exports = {
  debug: true,
  i18n: {
    locales: ["es-ES", "en-US"],
    defaultLocale: "es-ES",
    localeDetection: false,
    reloadOnPrerender: process.env.NODE_ENV === "development",
    react: { useSuspense: false },
  },

  // "pages": {
  //     "*": ["common"],
  //     "/ourServices/conciergerie": ["conciergerie"],
  //     "/ourServices/realEstate": ["realEstate"]
  // }
};
