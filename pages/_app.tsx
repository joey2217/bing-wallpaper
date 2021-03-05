import '../styles/globals.css'
import Header from '../components/Header'
import 'rc-image/assets/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="mx-10 my-6">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
