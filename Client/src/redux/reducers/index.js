import { combineReducers } from 'redux';

import authenticationReducer from './authenticationReducer/authenticationReducer';
import localWeatherReducer from './localWeatherReducer/localWeatherReducer';
import getSearchedCityReducer from './getSearchedCityReducer/getSearchedCityReducer';
import getCurrentSavedCityReducer from './getCurrentSavedCityReducer/getCurrentSavedCityReducer';
const rootReducer = combineReducers({
  authentication: authenticationReducer,
  localWeather: localWeatherReducer,
  getSearchedCityData: getSearchedCityReducer,
  getCurrentSavedCity: getCurrentSavedCityReducer
});

export default rootReducer;
