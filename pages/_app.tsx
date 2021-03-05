import '../styles/globals.css'
import Header from '../components/Header'
import 'rc-image/assets/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="mx-0 md:mx-4 lg:mx-10 my-2 md:my-4 lg:my-6">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
