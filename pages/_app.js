import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Header from '../components/Header'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <script src="https://kit.fontawesome.com/f5bd4af7ac.js" crossOrigin="anonymous"></script>
  </Head>
  <Header />
  <div className='overflow-hidden'>
    <Component {...pageProps} />
  </div>
  </>
}

export default MyApp
