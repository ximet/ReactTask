import { combineReducers } from 'redux';
import { dailyWeatherReducer } from './dailyWeatherReducer';
import { hourlyWeatherReducer } from './hourlyReducer';
import { currentWeatherReducer } from './currentWeatherReducer';
import { locationReducer } from './locationReducer';

export const rootReducer = combineReducers({
  dailyWeatherReducer,
  hourlyWeatherReducer,
  currentWeatherReducer,
  locationReducer
});
