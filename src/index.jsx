import ReactDOM from 'react-dom';
import './index.css';
import 'configs/request.config';
import App from 'app';
import store from './configs/store';

ReactDOM.render(<App store={store} />, document.getElementById('app'));
