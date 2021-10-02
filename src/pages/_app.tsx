import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Paulo Luan | React Native, React, NodeJS Developer</title>
        <meta name="description" content="React Native, React" />
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
