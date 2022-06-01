import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import MastHead from "./MastHead";
import CookieConsent from "react-cookie-consent"
import Navbar from "./navbar";
import ScrollToTop from "./ScrollTotop";
import Link from "next/link"

const Layout = ({ children }) => (
  <React.StrictMode>
    <Head>
      <title>Unico Hogar</title>
      <meta name="description" content="Real Estate & Premium Services" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="container-fluid px-0 mw-3 m-auto scrollspy-example"
    data-bs-spy="scroll"
    data-bs-target="#mainNav"
    data-bs-offset="-130"
    tabIndex="0"
    >
      <header>
        <Navbar /> 
        <MastHead />
      </header>
      <main>{children}</main>
      <CookieConsent 
      debug={true}
      location="bottom"
      style={{background:"#ffff", textAlign:"center",color:"#245564", fontSize:"1em", display:"flex", alignContent:"center"}}
      buttonStyle={{color:"#ffff", background:"#245564",fontSize:"1em"}}
      expires={1}
      >
       This site uses cookies. Please See our privacy
       <Link href="/policy" passHref> 
       <a style={{color:"#245564", textDecoration:"underline"}}>policy</a> 
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

export default Layout;
