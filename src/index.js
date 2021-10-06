import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from "react-router-dom";
import NotificationService from './services/notification';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './services/theme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      {/* <ThemeProvider theme={theme}> */}
        <SnackbarProvider
            hideIconVariant
            autoHideDuration={3000}
            maxSnack={3}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <NotificationService />
          {/* <CssBaseline /> */}
          <App />
        </SnackbarProvider>
      {/* </ThemeProvider>  */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);