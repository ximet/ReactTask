import { combineReducers } from 'redux';
import locationsReducer from './locations';
import currentWeatherReducer from './currentWeather';
import feedbackReducer from './feedback';

const rootReducer = combineReducers({
  locations: locationsReducer,
  current: currentWeatherReducer,
  feedback: feedbackReducer
});

export default rootReducer;
