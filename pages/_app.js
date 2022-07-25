import "../styles/globals.scss";
import "../styles/custom.scss";
import Head from "next/head";
import Script from "next/script";
import NProgress from "nprogress";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import React, { useEffect } from "react";
import { Router } from "next/router";

import * as gtag from "../lib/gtag";
function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  const { locale } = useRouter();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <React.StrictMode>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      {/* <Script
        strategy="afterInteractive"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: ` window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        window.gtag('js', new Date());
      
        window.gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}',{
          page_path: window.location.pathname,
        })`,
        }}
      /> */}
      <Layout locale={locale} className="container-fluid">
        <Component {...pageProps} />
      </Layout>
    </React.StrictMode>
  );
}

export default appWithTranslation(MyApp);
