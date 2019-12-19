import { combineReducers } from 'redux';
import cityWeatherReducer from './cityWeatherReducer';
import cities from './cities';
import citiesAreLoading from './citiesAreLoading';
import citiesHasErrored from './citiesHasErrored';

export default combineReducers({
    cities,
    citiesAreLoading,
    citiesHasErrored,
    cityWeatherReducer
});