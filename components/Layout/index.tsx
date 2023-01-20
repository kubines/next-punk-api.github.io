import { PropsWithChildren } from 'react';
import Head from 'next/head';

import { Header } from '../Header';

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Next Punk Api</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container-fluid min-vh-100 bg-dark bg-gradient">
        {children}
      </div>
    </>
  );
}
