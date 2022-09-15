export type FeedbackState = {
  name: string;
  email: string;
  problems: string;
  rating: number;
};

type FeedbackActionData = {
  type: string;
  payload: {
    name: string;
    data: string | number;
  };
};

export const CHANGE_FEEDBACK_STATE = 'CHANGE_FEEDBACK_STATE';
export const RESET_STATE = 'RESET_STATE';

export const feedbackReducer = (state: FeedbackState, { type, payload }: FeedbackActionData) => {
  switch (type) {
    case CHANGE_FEEDBACK_STATE:
      return {
        ...state,
        [payload.name]: payload.data
      };
    case RESET_STATE:
      return {
        name: '',
        email: '',
        problems: '',
        rating: 5
      };
    default:
      return state;
  }
};
