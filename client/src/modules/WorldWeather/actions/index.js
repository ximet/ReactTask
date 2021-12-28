import { createActionType } from './actionCreator';
import { baseActionCreator } from '../../../store/common_redux_utils/baseActionCreator';
export { onSearchClick } from './thunks';

export const CHANGE_SEARCH_VALUE = createActionType('CHANGE_SEARCH_VALUE');
export const SET_COUNTRY = createActionType('SET_COUNTRY');
export const SEARCHING_START = createActionType('SEARCHING_START');
export const SEARCHING_FINISHED = createActionType('SEARCHING_FINISHED');

export const changeSearchValue = (value = null) => baseActionCreator(CHANGE_SEARCH_VALUE, value);
export const setCountry = (value = null) => baseActionCreator(SET_COUNTRY, value);
export const searchingStart = (value = null) => baseActionCreator(SEARCHING_START, value);
export const searchingFinished = (value = null) => baseActionCreator(SEARCHING_FINISHED, value);
