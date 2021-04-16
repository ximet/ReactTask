import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import dataServices from '../../services/dataServices';
import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(dataServices)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
