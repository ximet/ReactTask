import { createActionType } from './actionCreator';
import { baseActionCreator } from '../../../store/common_redux_utils/baseActionCreator';
export { onSearchClick } from './thunks';


export const CHANGE_SEARCH_VALUE = createActionType('CHANGE_SEARCH_VALUE');
export const SET_COUNTRY_LIST = createActionType('SET_COUNTRY_LIST');

export const changeSearchValue = (value = null) => baseActionCreator(CHANGE_SEARCH_VALUE, value);
export const setCountryList = (value = null) => baseActionCreator(SET_COUNTRY_LIST, value);
