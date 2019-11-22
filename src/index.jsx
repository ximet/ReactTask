import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';
import App from './App.jsx';
import './styles/reset.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'),
);
