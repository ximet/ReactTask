import ReactDOM from 'react-dom';
import './index.css';
import 'configs/i18n.config';
import App from 'app';
import store from './store';

ReactDOM.render(<App store={store} />, document.getElementById('app'));
