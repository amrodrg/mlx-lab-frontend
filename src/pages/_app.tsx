import React from 'react';
import {AppProps} from 'next/app';

import 'tailwindcss/tailwind.css';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import {Provider} from 'react-redux';
import {store, persistor} from '../redux/store';
import {PersistGate} from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
