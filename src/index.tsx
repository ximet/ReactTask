import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './global-styles/global-styles.scss';
import { ThemeProvider } from './store/theme-context';
import { Provider } from 'react-redux';
import store from './store/store-redux';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
);
