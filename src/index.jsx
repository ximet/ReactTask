import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux';
import { ThemeContextProvider } from './context/themeContext.js';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </Provider>,
  document.getElementById('app')
);
