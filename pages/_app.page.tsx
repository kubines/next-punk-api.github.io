import { useEffect, useState } from 'react';
import Router from 'next/router';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';

import { Loader, Layout } from 'components';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  const start = () => setLoading(true);

  const end = () => setLoading(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  
  return loading 
    ? (
      <Layout>
        <Loader />
      </Layout>
    )
    : <Component {...pageProps} />;
}
