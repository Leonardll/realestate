const path = require("path");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const { i18n } = require("./next-i18next.config");
module.exports = withImages({
  esModule: true,
  i18n,
  // i18n: {
  //   //   //   //   // These are all the locales you want to support in
  //   //   //   //   // your application
  //   locales: ["es-ES", "en-US"],
  //   //   //   //   // This is the default locale you want to be used when visiting
  //   //   //   //   // a non-locale prefixed path e.g. `/hello`
  //   defaultLocale: "es-ES",
  //   localeDetection: false,
  //   // ns: {
  //   //   "*": ["common"],
  //   //   "/ourServices/conciergerie": ["conciergerie"],
  //   //   "/ourServices/realEstate": ["realEstate"],
  //   // },
  // },
  trailingSlash: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    disableStaticImages: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      "realestate-eosin-xi.vercel.app",
      "img3.idealista.com",
      "unicohogar.com",
    ],
  },

  module: {
    rules: [
      //...
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            //loader: ['file-loader'],
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
});
