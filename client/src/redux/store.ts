import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Local storage
import { loadState, saveState } from 'services/localStorage';

// Utils
import { throttle } from 'utils/helpers';

// Reducer
import rootReducer from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(
  throttle(() => {
    saveState({
      feedback: store.getState().feedback
    });
  }, 1000)
);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
