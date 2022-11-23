import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from 'redux/store';
import Footer from 'components/footer';
import Header from 'components/header';
import 'styles/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
