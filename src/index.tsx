import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { AuthProvider, ThemeProvider } from 'store';
import App from './components/App/App';
import './global-styles/global-styles.scss';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
);
