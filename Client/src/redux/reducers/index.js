import { combineReducers } from 'redux';

import titleReducer from './titleReducer/titleReducer';
import authenticationReducer from './authenticationReducer/authenticationReducer';
import localWeatherReducer from './localWeatherReducer/localWeatherReducer';
import getSearchedCityReducer from './getSearchedCityReducer/getSearchedCityReducer';
import getCurrentSavedCityReducer from './getCurrentSavedCityReducer/getCurrentSavedCityReducer';
const rootReducer = combineReducers({
  title: titleReducer,
  authentication: authenticationReducer,
  localWeather: localWeatherReducer,
  getSearchedCityData: getSearchedCityReducer,
  getCurrentSavedCity: getCurrentSavedCityReducer
});

export default rootReducer;
