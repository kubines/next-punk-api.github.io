import type { AppProps } from 'next/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
