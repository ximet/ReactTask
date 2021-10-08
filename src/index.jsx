import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles.scss';
import classes from './assets/styles/common.scss';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import configureStore from './store/configureStore';

const store = configureStore();

const appMainContainer = document.getElementById('app');
appMainContainer.classList.add(classes.appContainer);

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,
  appMainContainer
);
