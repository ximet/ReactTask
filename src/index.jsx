import ReactDOM from 'react-dom';
import App from './App.jsx';
import commonClasses from './styles.scss';

const appMainContainer = document.getElementById('app');
appMainContainer.classList.add(commonClasses.appContainer);

ReactDOM.render(<App />, appMainContainer);
