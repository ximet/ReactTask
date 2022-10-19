import { getFromStorage, setInStorage } from 'API/localStorage';
import { mockFeedbackData } from 'components/Data/mockFeedbackData';
import { FEEDBACK_LOCALSTORAGE_LABEL } from 'constants/labels';
import {
  FEEDBACK_REQUEST_FAILED,
  FEEDBACK_REQUEST_START,
  FEEDBACK_REQUEST_SUCCESS
} from 'redux/feedbackReducer';
import { Feedback } from 'types';

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
      const feedback = getFromStorage(FEEDBACK_LOCALSTORAGE_LABEL);
      if (feedback) {
        const updatedFeedbackData = [newFeedback, ...feedback];
        setInStorage(FEEDBACK_LOCALSTORAGE_LABEL, updatedFeedbackData);
        dispatch({ type: FEEDBACK_REQUEST_SUCCESS, payload: { data: updatedFeedbackData } });
      } else {
        setInStorage(FEEDBACK_LOCALSTORAGE_LABEL, [newFeedback]);
        dispatch({ type: FEEDBACK_REQUEST_SUCCESS, payload: { data: [newFeedback] } });
      }
    } catch (error) {
      dispatch({ type: FEEDBACK_REQUEST_FAILED, payload: error });
    }
  };
};
