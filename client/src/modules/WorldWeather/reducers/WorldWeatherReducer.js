import {
  CHANGE_SEARCH_VALUE,
  CLEAR_COUNTRY_LIST,
  CLEAR_SEARCH_VALUE,
  SEARCHING_FINISHED,
  SEARCHING_START,
  SET_COUNTRY_LIST,
  SET_SELECTED_COUNTRY
} from '../actions';

const INITIAL_STATE = {
  searchValue: '',
  countryList: [],
  selectedCountry: null,
  isSearchingStart: false
};

const worldWeatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    case SET_COUNTRY_LIST:
      return { ...state, countryList: action.payload };
    case SEARCHING_START:
      return { ...state, isSearchingStart: action.payload };
    case SEARCHING_FINISHED:
      return { ...state, isSearchingStart: action.payload };
    case SET_SELECTED_COUNTRY:
      return { ...state, selectedCountry: action.payload };
    case CLEAR_SEARCH_VALUE:
      return { ...state, searchValue: '' };
    case CLEAR_COUNTRY_LIST:
      return { ...state, countryList: [] };
    default:
      return state;
  }
};

export default worldWeatherReducer;
