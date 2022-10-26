import { FeedbackState } from 'types';
import { AnyAction } from 'redux';

export const initState: FeedbackState = {
  feedback: [],
  loading: false,
  error: ''
};
export const FEEDBACK_REQUEST_START = 'FEEDBACK_REQUEST_START';
export const FEEDBACK_REQUEST_SUCCESS = 'FEEDBACK_REQUEST_SUCCESS';
export const FEEDBACK_REQUEST_FAILED = 'FEEDBACK_REQUEST_FAILED';

export const feedbackReducer = (state: FeedbackState = initState, action: AnyAction) => {
  switch (action.type) {
    case FEEDBACK_REQUEST_START:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case FEEDBACK_REQUEST_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
        loading: false
      };
    case FEEDBACK_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export const feedbackSelector = (state: FeedbackState) => {
  return state.feedback;
};
