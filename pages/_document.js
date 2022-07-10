import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.locale || "es-ES";
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
