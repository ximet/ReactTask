import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = process.env.NODE_ENV !== 'production'
  && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const configureStore = (preloadedState) => (
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk)),
  )
);

const store = configureStore({});

export default store;
