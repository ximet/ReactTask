import {
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS,
  CLEAR_SEARCH,
  SET_SEARCH_IN_PROGRESS
} from '../actionTypes';
import { weatherAPI } from '../services/dataService';

export const setSearchQuery = searchQuery => ({
  type: SET_SEARCH_QUERY,
  payload: {
    searchQuery
  }
});

export const setSearchInProgress = isSearchInProgress => ({
  type: SET_SEARCH_IN_PROGRESS,
  payload: {
    isSearchInProgress
  }
});

export const setSearchResults = searchResults => ({
  type: SET_SEARCH_RESULTS,
  payload: {
    searchResults
  }
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH
});

export const searchLocations = query => async (dispatch, getState) => {
  const state = getState();
  if (state.serverApi.isTokenReceived && !state.locationsSearch.isSearchInProgress) {
    try {
      dispatch(setSearchInProgress(true));
      dispatch(setSearchQuery(query));

      const searchResults = await weatherAPI.searchLocation(query);
      dispatch(setSearchResults(searchResults));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setSearchInProgress(false));
    }
  }
};
