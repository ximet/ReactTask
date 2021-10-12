import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/store/configureStore';
import App from './App.jsx';
import './assets/styles/main.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
