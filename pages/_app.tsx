import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Header from './components/Header';
import '../i18n';


function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header />
    <main>
    <Component {...pageProps} />
    </main>
    </>

  );
}

export default appWithTranslation(App);