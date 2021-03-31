import '../styles/globals.css'
import Header from '../components/Header'
import 'rc-image/assets/index.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>BingWallpaper</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="BingWallpaper" />
        <meta name="description" content="BingWallpaper" />
      </Head>
      <Header />
      <main className="mx-0 md:mx-4 lg:mx-10 my-2 md:my-4 lg:my-6">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
