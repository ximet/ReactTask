import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './redux/store';
import { ThemeProvider } from './providers/themeContext';
import { TokenProvider } from './providers/tokenContext';

const store = configureStore();

ReactDOM.render(
  <TokenProvider>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </TokenProvider>,
  document.getElementById('app')
);
