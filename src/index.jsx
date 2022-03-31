import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './redux/store';
import { ThemeProvider } from './providers/themeContext';

const store = configureStore();

ReactDOM.render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('app')
);
