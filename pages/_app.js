import '../styles/globals.scss'
import '../styles/custom.scss'
import Head from 'next/head'
//import NProgress from 'nprogresfa-spin'
import Layout from '../components/layout'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
    <Head>
    </Head>
    <Layout>
      <Component {...pageProps} />

    </Layout>
      
    </React.StrictMode>
  )
}

export default MyApp
