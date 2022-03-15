import React from 'react';
import {AppProps} from 'next/app';

import 'tailwindcss/tailwind.css';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
