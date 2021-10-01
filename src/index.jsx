import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles.scss';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  document.getElementById('app')
);
