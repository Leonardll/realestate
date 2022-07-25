import Document, { Html, Head, Main, NextScript } from "next/document";

import i18nextConfig from "../next-i18next.config";

export default class CustomDocument extends Document {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale}>
        <Head>
          <script
            strategy="afterInteractive"
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`}
          />
          <script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: ` window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${process.env.GA_ID}',{
          page_path: window.location.pathname,
        })`,
            }}
          />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
