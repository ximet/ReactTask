import { combineReducers } from 'redux';
import currentCity from './currentCity';
import matchedCities from './matchedCities';

const rootReducer = combineReducers({
  currentCity,
  matchedCities
});

export default rootReducer;
