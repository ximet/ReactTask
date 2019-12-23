import { combineReducers } from 'redux';
import currentCityId from './currentCityId';
import cities from './cities';
import citiesAreLoading from './citiesAreLoading';
import citiesHasErrored from './citiesHasErrored';

export default combineReducers({
    cities,
    citiesAreLoading,
    citiesHasErrored,
    currentCityId
});