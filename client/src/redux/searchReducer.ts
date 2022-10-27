import { SEARCH_LOCALSTORAGE_LABEL } from 'constants/labels';
import { AnyAction } from 'redux';
import { SearchState } from 'types';
import { getFromStorage } from '../API/localStorage';

export const SEARCH_SAVE_LOCATION = 'SAVE_LOCATION_SEARCH';

const initialState: SearchState = {
  prevSearches: getFromStorage(SEARCH_LOCALSTORAGE_LABEL) || []
};

export const searchReducer = (
  state: SearchState = initialState,
  action: AnyAction
): SearchState => {
  switch (action.type) {
    case SEARCH_SAVE_LOCATION:
      return {
        ...state,
        prevSearches: action.payload
      };
    default:
      return state;
  }
};

export const prevSearchSelector = state => {
  return state.search.prevSearches;
};
