import ReactDOM from 'react-dom';
import DarkModeProvider from './contexts/darkMode';
import { Provider } from 'react-redux';
import store from './store';
import App from './App.jsx';

ReactDOM.render(
  <Provider store={store}>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </Provider>,
  document.getElementById('app')
);
