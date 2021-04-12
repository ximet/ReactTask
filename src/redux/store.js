import { applyMiddleware, createStore, compose } from 'redux';
import DataService from '../services/DataService';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(DataService)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
