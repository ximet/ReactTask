import { combineReducers } from 'redux';
import TemperatureUnitChangeReducer from './TemperatureUnitChangeReducer';
import AllWeatherInfoReducer from './AllWeatherInfoReducer';
import CityWeatherInfoReducer from './CityWeatherInfoReducer';
import LoaderReducer from './LoaderReducer';

export default combineReducers({
  TemperatureUnitChangeReducer,
  AllWeatherInfoReducer,
  CityWeatherInfoReducer,
  LoaderReducer,
});
