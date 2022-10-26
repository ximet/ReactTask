import { getFromStorage, setInStorage } from 'API/localStorage';
import { mockFeedbackData } from 'components/Data/mockFeedbackData';
import { FEEDBACK_LOCALSTORAGE_LABEL, SEARCH_LOCALSTORAGE_LABEL } from 'constants/labels';
import {
  FEEDBACK_REQUEST_FAILED,
  FEEDBACK_REQUEST_START,
  FEEDBACK_REQUEST_SUCCESS
} from 'redux/feedbackReducer';
import { Feedback } from 'types';
import { SEARCH_SAVE_LOCATION } from './searchReducer';

export const getFeedback = () => {
  return dispatch => {
    try {
      dispatch({ type: FEEDBACK_REQUEST_START });
      const feedbackData = getFromStorage(FEEDBACK_LOCALSTORAGE_LABEL);
      dispatch({
        type: FEEDBACK_REQUEST_SUCCESS,
        payload: { data: feedbackData || mockFeedbackData }
      });
      if (!feedbackData) setInStorage(FEEDBACK_LOCALSTORAGE_LABEL, mockFeedbackData);
    } catch (error) {
      dispatch({ type: FEEDBACK_REQUEST_FAILED, payload: error });
    }
  };
};

export const addFeedback = (newFeedback: Feedback) => {
  return dispatch => {
    try {
      const feedbackData = getFromStorage(FEEDBACK_LOCALSTORAGE_LABEL);
      const updatedFeedbackData = feedbackData ? [newFeedback, ...feedbackData] : [newFeedback];
      setInStorage(FEEDBACK_LOCALSTORAGE_LABEL, updatedFeedbackData);
      dispatch({
        type: FEEDBACK_REQUEST_SUCCESS,
        payload: { data: updatedFeedbackData }
      });
    } catch (error) {
      dispatch({ type: FEEDBACK_REQUEST_FAILED, payload: error });
    }
  };
};

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
