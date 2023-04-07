// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { useSSR } from '@nextui-org/react';
import '../styles/globals.css'

import { Layout } from "../components/Layout.js";

import { init as sboxAuthInit } from 'sbox-auth-next';

sboxAuthInit({
  DEBUG: true,
  REFRESH_PERIOD: 300,
});

function MyApp({ Component, pageProps }) {
  const { isBrowser } = useSSR()
  return(
    isBrowser && (
      <NextUIProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
      </NextUIProvider>
    )
  )
}

export default MyApp;