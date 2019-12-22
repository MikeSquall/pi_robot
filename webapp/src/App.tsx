import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import Layout from './components/Layout';

export default () => (
  <MuiThemeProvider theme={theme}>
    <Layout/>
  </MuiThemeProvider>
);
