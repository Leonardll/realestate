import '../styles/globals.scss'
import '../styles/custom.scss'
import Head from 'next/head'
import NProgress from 'nprogress'
import Layout from '../components/Layout'
import React from 'react'
import { Router } from 'next/router'

function MyApp({ Component, pageProps }) {
  NProgress.configure({showSpinner:false})
 
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  });

  return (
    <React.StrictMode>
    <Head>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
    </Head>
    <Layout>
      <Component {...pageProps} />

    </Layout>
      
    </React.StrictMode>
  )
}

export default MyApp
