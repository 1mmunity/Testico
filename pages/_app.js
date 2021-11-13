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
  </Head>
  </>
  )
}

export default MyApp
