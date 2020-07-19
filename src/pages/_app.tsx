import React from 'react';

import '../styles/normalize.css';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
