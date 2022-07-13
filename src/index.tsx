import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './global-styles/global-styles.scss';
import { ThemeProvider } from './store/theme-context';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('app')
);
