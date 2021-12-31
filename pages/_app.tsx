import type { AppProps } from 'next/app'
import Head from 'next/head';
import Header from '../components/Header';
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BingWallpaper</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="BingWallpaper" />
        <meta name="description" content="BingWallpaper" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
