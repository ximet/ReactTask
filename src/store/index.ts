import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from './rootReducer';
import { loadThemeState, saveThemeState } from './helpers';

const persistedState = {
  theme: loadThemeState()
};

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveThemeState(store.getState().theme);
});

export type AppDispatch = typeof store.dispatch;
