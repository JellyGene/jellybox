import "./global.css";

import Head from "next/head"

import JellyBoxLayout from "../components/jelly-box-layout"

export default function JellyBoxApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jellybox Studio | Just A Cute Lil Indie Animation Studio</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3cd356" />
        <meta name="msapplication-TileColor" content="#3cd356" />
        <meta name="theme-color" content="#3cd356" />
      </Head>
      <JellyBoxLayout>
        <Component {...pageProps} />
      </JellyBoxLayout>
    </>
  )
}