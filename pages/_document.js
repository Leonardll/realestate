import Document, { Html, Head, Main, NextScript } from "next/document";
import { I18n } from "next-i18next";
export default class CustomDocument extends Document {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.locale || I18n.defaultLocale;
    console.log("currentLocale", currentLocale);
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
