import "./global.css";

import Head from "next/head"

import JellyBoxLayout from "../components/jelly-box-layout"

export default function JellyBoxApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>hi</title>
      </Head>
      <JellyBoxLayout>
        <Component {...pageProps} />
      </JellyBoxLayout>
    </>
  )
}