import { combineReducers, createStore } from 'redux/lib/redux';
import { loadState, saveState } from '../DataService/localDataService';
import cityReducer from './locations';
import themeReducer, { toggleTheme } from './theme';

const rootReducer = combineReducers({
  favCityList: cityReducer,
  theme: themeReducer
});

const persistedState = {
  favCityList: loadState('savedLocations'),
  theme: loadState('theme')
};

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState('savedLocations', store.getState().favCityList);
  saveState('theme', store.getState().theme);
});

export default store;
