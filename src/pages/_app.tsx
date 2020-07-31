import React from 'react';
import { ThemeProvider } from 'styled-components';
import { setUA } from '../utils/agent';

import '../styles/normalize.css';
import '../styles/index.css';

const theme = {
  gradation: `linear-gradient(to right, #f15a24 0%, #ff00ff);`,
};

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (context) => {
  const { Component, ctx } = context;
  const { req } = ctx;

  const pageProps = (await Component.getInitialProps?.(ctx)) || {};
  const userAgent = req && req.headers['user-agent'];

  userAgent && setUA(userAgent);

  return { pageProps };
};
