import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './global-styles/global-styles.scss';
import { ThemeProvider } from './store/theme-context';
import { Provider } from 'react-redux';
import store from './store/index-redux';
import { AuthProvider } from './store/auth-context';

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
