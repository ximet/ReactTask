import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Theme from './components/Theme/Theme';

import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Theme />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
