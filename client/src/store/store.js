import { createStore } from 'redux';
import rootReducer from './reducers/reducers';

const localStorageKey = 'theme';
const persistedTheme = localStorage.getItem(localStorageKey);

let initialState = {
  darkModeReducer: persistedTheme ? JSON.parse(persistedTheme) : {},
  selectedCity: [],
  cities: []
};

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  const darkModeReducer = store.getState().darkModeReducer;
  if (!darkModeReducer) return;

  localStorage.setItem(localStorageKey, JSON.stringify(darkModeReducer));
});

export default store;
