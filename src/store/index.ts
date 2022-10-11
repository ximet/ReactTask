import { compose, createStore } from 'redux';
import { rootReducer } from './rootReducer';
import { loadThemeState, saveThemeState } from './helpers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistedState = {
  theme: loadThemeState()
};

export const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

store.subscribe(() => {
  saveThemeState(store.getState().theme);
});
