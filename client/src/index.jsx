import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './redux/store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
