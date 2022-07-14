import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import Footer from "./Footer";
import MastHead from "./MastHead";
import CookieConsent from "react-cookie-consent";
import Navbar from "./navbar";
import ScrollToTop from "./ScrollTotop";
import Link from "next/link";

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    //i18n.changeLanguage(locale);
    router.push(router.pathname, router.asPath, { locale });
    console.log(locale);
  };
  console.log(locale);
  return (
    <React.StrictMode>
      <Head>
        <title>Unico Hogar</title>
        <meta name="description" content="Real Estate & Premium Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            fontSize: "1em",
            display: "flex",
            alignContent: "center",
          }}
          expires={1}
        >
          This site uses cookies. Please See our privacy
          <Link href="/policy" passHref>
            <a style={{ color: "#245564", textDecoration: "underline" }}>
              {" "}
              policy{" "}
            </a>
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
