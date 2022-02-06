import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


 const Layout = ({children}) => (
    <React.StrictMode>
    <Head>
        <title>Monec Barcelona</title>
    </Head>
    <div className="container mw-3 m-auto">
        <header>
            <Navbar />
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