import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@mui/material';
import rsTheme from './styles/rsTheme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={rsTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
