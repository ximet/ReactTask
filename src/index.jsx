import ReactDOM from 'react-dom';
import App from './App.jsx';
import ThemeProvider from './provider/ThemeProvider.jsx';
import { compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer.js';
import {Provider} from 'react-redux';

const store = createStore(
	rootReducer,
	compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

ReactDOM.render(
	<Provider store={store}>
	  <ThemeProvider>
		<App />
	  </ThemeProvider>
	</Provider>,
	document.getElementById('app')
);
  
