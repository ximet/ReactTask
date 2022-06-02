import { createStore } from 'redux';
import rootReducer from './reducers/reducers';

const localStorageKey = 'theme';
const persistedTheme = localStorage.getItem(localStorageKey);

let initialState = {darkModeToggle: persistedTheme ? JSON.parse(persistedTheme) : {}}

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  const { darkModeToggle } = store.getState();

  if (!darkModeToggle) return;

  localStorage.setItem(localStorageKey, JSON.stringify(darkModeToggle));
});

export default store;
