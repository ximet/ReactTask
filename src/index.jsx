import ReactDOM from 'react-dom';
import App from './App.jsx';
import commonClasses from './styles.scss';
import { CookiesProvider } from 'react-cookie';

const appMainContainer = document.getElementById('app');
appMainContainer.classList.add(commonClasses.appContainer);

ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  appMainContainer
);
