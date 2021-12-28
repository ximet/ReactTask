import { CHANGE_SEARCH_VALUE, SEARCHING_FINISHED, SEARCHING_START, SET_COUNTRY } from '../actions';

const INITIAL_STATE = {
  searchValue: '',
  country: [],
  isSearchingStart: false
};

const worldWeatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    case SET_COUNTRY:
      return { ...state, country: action.payload };
    case SEARCHING_START:
      return { ...state, isSearchingStart: action.payload };
    case SEARCHING_FINISHED:
      return { ...state, searchValue: '', isSearchingStart: action.payload };
    default:
      return state;
  }
};

export default worldWeatherReducer;
