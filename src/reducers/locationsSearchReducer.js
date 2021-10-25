import {
  CLEAR_SEARCH,
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS,
  SET_SEARCH_IN_PROGRESS
} from '../actionTypes';

const initialState = {
  searchQuery: '',
  searchResults: [],
  isSearchInProgress: false
};

const locationsSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload.searchQuery
      };
    case SET_SEARCH_IN_PROGRESS:
      return {
        ...state,
        isSearchInProgress: action.payload.isSearchInProgress
      };

    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload.searchResults
      };

    case CLEAR_SEARCH:
      return {
        searchQuery: '',
        searchResults: [],
        isSearchInProgress: false
      };

    default:
      return state;
  }
};

export default locationsSearchReducer;
