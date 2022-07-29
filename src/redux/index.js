import { combineReducers, createStore } from 'redux/lib/redux';
import { loadState, saveState } from '../DataService/localDataService';
import cityReducer from './locations';
import themeReducer from './theme';

const rootReducer = combineReducers({
  favCityList: cityReducer,
  themeSwitch: themeReducer
});

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  console.log(store.getState());
  saveState('savedLocations', store.getState());
  // saveState('theme', store.getState().themeSwitch);
});

export default store;
