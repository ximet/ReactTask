import { Dispatch } from 'redux';

import type { Feedback } from 'types';
import { ActionType, Action } from '../actionTypes/feedback';

export const addFeedback = (feedback: Feedback) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.ADD_FEEDBACK_PENDING
  });

  try {
    dispatch({
      type: ActionType.ADD_FEEDBACK_SUCCESS,
      payload: feedback
    });
  } catch (err) {
    if (err instanceof Error) {
      dispatch({
        type: ActionType.ADD_FEEDBACK_FAIL,
        payload: err.message
      });
    }
  }
};
