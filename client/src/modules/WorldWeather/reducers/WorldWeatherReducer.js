import { CHANGE_SEARCH_VALUE, SET_COUNTRY_LIST } from '../actions';

const INITIAL_STATE = {
  searchValue: '',
  countries: []
};

const worldWeatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    case SET_COUNTRY_LIST:
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};

export default worldWeatherReducer;
