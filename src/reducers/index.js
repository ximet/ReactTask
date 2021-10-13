import { combineReducers } from 'redux';
import locationManager from './locationManagerReducers';

const rootReducers = combineReducers({
  locationManager
});

export default rootReducers;
