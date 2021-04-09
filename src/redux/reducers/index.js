import { combineReducers } from 'redux';
import locationsReducer from './locations';
import currentWeatherReducer from './currentWeather';

const rootReducer = combineReducers({
  locations: locationsReducer,
  current: currentWeatherReducer
});

export default rootReducer;
