import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './redux/store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
