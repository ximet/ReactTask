import ReactDOM from 'react-dom';
import App from './App.jsx';
import ThemeProvider from './provider/ThemeProvider.jsx';

ReactDOM.render(<ThemeProvider><App /></ThemeProvider>, document.getElementById('app'));
