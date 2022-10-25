import { SEARCH_LOCALSTORAGE_LABEL } from 'constants/labels';
import { AnyAction } from 'redux';
import { SearchState } from 'types';
import { getFromStorage, setInStorage } from '../API/localStorage';

export const SEARCH_SAVE_CURRENT_LOCATION = 'SAVE_CURRENT_LOCATION';
export const SEARCH_SAVE_LOCATION = 'SAVE_LOCATION_SEARCH';

const initialState: SearchState = {
  prevSearches: getFromStorage(SEARCH_LOCALSTORAGE_LABEL) || []
};

export const searchReducer = (
  state: SearchState = initialState,
  action: AnyAction
): SearchState => {
  if (action.type === SEARCH_SAVE_LOCATION) {
    if (action.payload === '') {
      return state;
    }
    if (state.prevSearches.includes(action.payload)) {
      const filteredPrevSearches = [...state.prevSearches].filter(element => {
        return element !== action.payload;
      });
      const prevSearches = [action.payload, ...filteredPrevSearches];
      setInStorage(SEARCH_LOCALSTORAGE_LABEL, prevSearches);
      return {
        ...state,
        prevSearches
      };
    }
    if (state.prevSearches.length > 6) {
      const slicedPrevSearches = [...state.prevSearches].slice(0, 6);
      const prevSearches = [action.payload, ...slicedPrevSearches];
      setInStorage(SEARCH_LOCALSTORAGE_LABEL, prevSearches);
      return {
        ...state,
        prevSearches
      };
    }
    const prevSearches = [action.payload, ...state.prevSearches];
    setInStorage(SEARCH_LOCALSTORAGE_LABEL, prevSearches);
    return {
      ...state,
      prevSearches
    };
  }
  return state;
};

export const prevSearchSelector = state => {
  return { currentLocation: state.currentLocation, prevSearches: state.prevSearches };
};
