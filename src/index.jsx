import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import DarkModeProvider from './contexts/darkMode';
import { Provider } from 'react-redux';
import store from './store';
import App from './App.jsx';

ReactDOM.render(
  <Provider store={store}>
    <DarkModeProvider>
      <Router>
        <App />
      </Router>
    </DarkModeProvider>
  </Provider>,
  document.getElementById('app')
);
