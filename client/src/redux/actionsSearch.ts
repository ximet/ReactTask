import { getFromStorage, setInStorage } from 'API/localStorage';
import { SEARCH_LOCALSTORAGE_LABEL } from 'constants/labels';
import { SEARCH_SAVE_LOCATION } from './searchReducer';

export const saveSearch = url => {
  try {
    const savedSearches = getFromStorage(SEARCH_LOCALSTORAGE_LABEL) || [];
    if (url === '') {
      return savedSearches;
    }

    if (savedSearches.includes(url)) {
      const filteredPrevSearches = [...savedSearches].filter(element => {
        return element !== url;
      });
      const prevSearches = [url, ...filteredPrevSearches];
      setInStorage(SEARCH_LOCALSTORAGE_LABEL, prevSearches);
      return prevSearches;
    }

    if (savedSearches.length > 3) {
      const slicedPrevSearches = [...savedSearches].slice(0, 3);
      const prevSearches = [url, ...slicedPrevSearches];
      setInStorage(SEARCH_LOCALSTORAGE_LABEL, prevSearches);
      return prevSearches;
    }

    const prevSearches = [url, ...savedSearches];
    return prevSearches;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const saveSearches = url => {
  return dispatch => {
    try {
      const prevSearches = saveSearch(url);
      setInStorage(SEARCH_LOCALSTORAGE_LABEL, prevSearches);
      dispatch({
        type: SEARCH_SAVE_LOCATION,
        payload: prevSearches
      });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };
};
