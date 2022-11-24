import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { Provider } from 'react-redux';
import store from 'redux/store';
import Footer from 'components/footer';
import Header from 'components/header';
import 'styles/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RumRum cars</title>
      </Head>
      <Provider store={store}>
        <Script
          src='https://kit.fontawesome.com/f73fa21bee.js'
          crossOrigin='anonymous'
        ></Script>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
