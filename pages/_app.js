import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import 'aos/dist/aos.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <div className='relative'>
    <Component {...pageProps} />
  </div>
  <Head>
    <title>Testico</title>
    <meta property="og:title" content="Testico - Online test" />
    <meta property="og:description" content="Testico is a questioner made to make online test management easier, for both teachers and students." />
  </Head>
  </>
  )
}

export default MyApp
