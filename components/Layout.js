import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import Footer from "./Footer";
import MastHead from "./MastHead";
import CookieConsent from "react-cookie-consent";
import Navbar from "./navbar";
import ScrollToTop from "./ScrollTotop";
import * as gtag from "../lib/gtag";
import Link from "next/link";
import Script from "next/script";
const Layout = ({ children }) => {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };
  const handleAcceptCookie = () => {
    if (process.env.NEXT_PUBLIC_GA_ID) {
      initGA(process.env.NEXT_PUBLIC_GA_ID);
    }
  };

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
        <title>Unico Hogar</title>
        <meta name="description" content="Real Estate & Premium Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
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
      />
      <div
        className="container-fluid px-0 mw-3 m-auto scrollspy-example"
        data-bs-spy="scroll"
        data-bs-target="#mainNav"
        data-bs-offset="-130"
        tabIndex="0"
      >
        <header>
          <Navbar changeLanguage={changeLanguage} />
          <MastHead
            mastheadText={t("mastheadText")}
            mastheadTextTitle={t("mastheadTitle")}
          />
        </header>
        <main>{children}</main>
        <CookieConsent
          onAccept={() => {
            handleAcceptCookie();
          }}
          onDecline={() => {}}
          cookieName="CookieConsent"
          cookieValue="true"
          sameSite="strict"
          buttonWrapperClasses="d-flex"
          enableDeclineButton
          declineButtonStyle={{
            background: "#245564",
            padding: "10px 20px",
            borderRadius: "16px",
            fontSize: "1em",
            color: "#ffff",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
          ariaAcceptLabel="Accept cookies"
          ariaDeclineLabel="Decline cookies"
          flipButtons
          debug={true}
          location="bottom"
          style={{
            background: "#ffff",
            textAlign: "center",
            color: "#245564",
            fontSize: "1em",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
          buttonStyle={{
            color: "#ffff",
            background: "#245564",
            padding: "10px 20px",
            borderRadius: "16px",
            fontSize: "1em",
            display: "flex",
            alignContent: "center",
          }}
          expires={1}
        >
          This site uses cookies. Please See our privacy
          <Link href="/policy" passHref>
            <a style={{ color: "#5ab4ab", textDecoration: "none" }}> policy </a>
          </Link>
          for more information
        </CookieConsent>
        <ScrollToTop />
      </div>
      <footer>
        <Footer />
      </footer>
    </React.StrictMode>
  );
};

export default Layout;

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "conciergerie",
      "realEstate",
    ])),
  },
});
