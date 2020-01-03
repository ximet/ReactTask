import { combineReducers } from 'redux';
import weatherReducer from './weather.reducer';

const rootReducer = combineReducers({
  weatherReducer,
});

export default rootReducer;
