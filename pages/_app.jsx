import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { theme } from '../lib/theme';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired, // eslint-disable-line
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <CacheProvider value={createCache({ key: 'css' })}>
        <ThemeProvider theme={theme}>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
              rel="stylesheet"
              href="https://storage.googleapis.com/async-await/nprogress-light-spinner.css"
            />
          </Head>
          <CssBaseline />
          <Header {...pageProps} />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    );
  }
}

MyApp.propTypes = propTypes;

export default MyApp;
