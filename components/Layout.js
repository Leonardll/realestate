import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import MastHead from "./MastHead";
import Navbar from "./Navbar";


 const Layout = ({children}) => (
    <React.StrictMode>
    <Head>
        <title>Monec Barcelona</title>
    </Head>
    <div className="container-fluid ps-0 mw-3 m-auto">
        <header>
            <Navbar />
            <MastHead />
        </header>
        <main>
            {children}
        </main>
       
    </div>
    <footer>
            <Footer />
    </footer>
    </React.StrictMode>
);

export default Layout;