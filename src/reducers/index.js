import { combineReducers } from 'redux';
import locationManager from './locationManagerReducers';
import preloaderManager from './preloaderManagerReducers';

const rootReducers = combineReducers({
  locationManager,
  preloaderManager
});

export default rootReducers;
