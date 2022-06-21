import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
// import { ThemeProvider } from './hooks/themeContext';

ReactDOM.render(
  // <ThemeProvider>
  <App />,
  // </ThemeProvider>,
  document.getElementById('app')
);
