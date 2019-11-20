import {combineReducers} from 'redux';
import TemperatureUnitChangeReducer from './TemperatureUnitChangeReducer';
import WeatherInfoReducer from './WeatherInfoReducer';
import LocationWeatherInfoReducer from './LocationWeatherInfoReducer';


export default combineReducers({
  TemperatureUnitChangeReducer,
  WeatherInfoReducer,
  LocationWeatherInfoReducer
})