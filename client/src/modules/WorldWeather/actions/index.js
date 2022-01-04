import { createActionType } from './actionCreator';
import { baseActionCreator } from '../../../store/common_redux_utils/baseActionCreator';
export { onSearchClick, onSelectCountry, getCurrentLocationWeather } from './thunks';

export const CHANGE_SEARCH_VALUE = createActionType('CHANGE_SEARCH_VALUE');
export const SET_COUNTRY_LIST = createActionType('SET_COUNTRY_LIST');
export const SEARCHING_START = createActionType('SEARCHING_START');
export const SEARCHING_FINISHED = createActionType('SEARCHING_FINISHED');
export const SET_SELECTED_COUNTRY = createActionType('SET_SELECTED_COUNTRY');
export const CLEAR_SEARCH_VALUE = createActionType('CLEAR_SEARCH_VALUE');
export const CLEAR_COUNTRY_LIST = createActionType('CLEAR_COUNTRY_LIST');

export const changeSearchValue = (value = null) => baseActionCreator(CHANGE_SEARCH_VALUE, value);
export const setCountryList = (value = null) => baseActionCreator(SET_COUNTRY_LIST, value);
export const searchingStart = (value = null) => baseActionCreator(SEARCHING_START, value);
export const searchingFinished = (value = null) => baseActionCreator(SEARCHING_FINISHED, value);
export const setSelectedCountry = (value = null) => baseActionCreator(SET_SELECTED_COUNTRY, value);
export const clearCountryList = (value = null) => baseActionCreator(CLEAR_COUNTRY_LIST, value);
export const clearSearchValue = (value = null) => baseActionCreator(CLEAR_SEARCH_VALUE, value);
