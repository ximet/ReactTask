import type { Feedback } from 'types';
import { ActionType, Action } from '../actionTypes/feedback';

export interface FeedbackState {
  data: Feedback[];
  loading: boolean;
  error: string | null;
}

export const initialState: FeedbackState = {
  data: [],
  loading: false,
  error: null
};

const feedbackReducer = (state: FeedbackState = initialState, action: Action): FeedbackState => {
  switch (action.type) {
    case ActionType.ADD_FEEDBACK_PENDING: {
      return {
        ...state,
        loading: true
      };
    }
    case ActionType.ADD_FEEDBACK_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload]
      };
    }
    case ActionType.ADD_FEEDBACK_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
};

export default feedbackReducer;
