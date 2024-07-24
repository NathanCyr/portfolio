import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Header from './components/Header';
import '../i18n';
import React, {Suspense} from 'react';


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
    <Header />
    </Suspense>
    <main>
    <Component {...pageProps} />
    </main>
    </>

  );
}

export default appWithTranslation(App);