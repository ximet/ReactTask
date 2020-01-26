import { combineReducers } from 'redux';
import toggleButton from './toggleButton';
import fetchWeatherByCity from './fetchWeatherByCity';
import setSelectedCity from './setSelectedCity';

const rootReducers = combineReducers({ toggleButton, fetchWeatherByCity, setSelectedCity });

export default rootReducers;
