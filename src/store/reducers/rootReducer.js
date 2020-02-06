import { combineReducers } from 'redux';
import fetchWeatherByCity from './fetchWeatherByCity';
import setSelectedCity from './setSelectedCity';

const rootReducers = combineReducers({ fetchWeatherByCity, setSelectedCity });

export default rootReducers;
