import Document, { Html, Head, Main, NextScript } from "next/document";

import i18nextConfig from "../next-i18next.config";

export default class CustomDocument extends Document {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale}>
        <Head></Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
