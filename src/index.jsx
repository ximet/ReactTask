import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles.scss';
import classes from './assets/styles/common.scss';
import { CookiesProvider } from 'react-cookie';

const appMainContainer = document.getElementById('app');
appMainContainer.classList.add(classes.appContainer);

ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  appMainContainer
);
