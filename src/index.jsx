import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import DarkModeProvider from './contexts/darkMode';
import App from './App.jsx';

ReactDOM.render(
  <DarkModeProvider>
    <Router>
      <App />
    </Router>
  </DarkModeProvider>,
  document.getElementById('app')
);
