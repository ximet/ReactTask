import { combineReducers } from 'redux';
import toggleButton from './toggleButton';
import fetchWeatherByCity from './fetchWeatherByCity';

const rootReducers = combineReducers({ toggleButton, fetchWeatherByCity });

export default rootReducers;
