import Document, { Html, Head, Main, NextScript } from "next/document";
import { i18n } from "next-i18next";
export default class CustomDocument extends Document {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.locale || i18n.defaultLocale;
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
