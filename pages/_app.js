import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import 'aos/dist/aos.css'
import Head from 'next/head'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHQL_KEY}`,
  },
})

function MyApp({ Component, pageProps }) {
  return (
  <>
  <ApolloProvider client={client}>
    <div className='relative overflow-hidden'>
      <Component {...pageProps} />
    </div>
  </ApolloProvider>
  <Head>
    <title>Testico</title>
    <meta property="og:title" content="Testico - Online test" />
    <meta property="og:description" content="Testico is a questioner made to make online test management easier, for both teachers and students." />
    <meta name="theme-color" content="#4F46E5" />
  </Head>
  </>
  )
}

export default MyApp