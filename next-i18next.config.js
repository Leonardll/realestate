module.exports = {
  debug: true,
  i18n: {
    defaultLocale: "es-ES",
    locales: ["es-ES", "en-US"],
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
