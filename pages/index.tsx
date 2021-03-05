import Head from 'next/head'
import data from '../public/data.json'

function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {data.map((i) => (
          <img className="w-40 h-40" key={i.date} src={i.img} />
        ))}
      </main>
    </div>
  )
}

export default Home
