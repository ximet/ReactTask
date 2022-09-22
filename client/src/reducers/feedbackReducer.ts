import { Feedback } from 'types';
import { uid } from 'utils/uid';

export type ActionData = {
  type: string;
  payload?: {
    name: string;
    data?: string | number | undefined;
  };
};
export const UPDATE_INPUT_VALUES = 'UPDATE_INPUT_VALUES';
export const FEEDBACK_FORM_RESET = 'FEEDBACK_FORM_RESET';

const feedbackReducer = (state: Feedback, { type, payload }: ActionData) => {
  switch (type) {
    case UPDATE_INPUT_VALUES:
      return {
        ...state,
        [`${payload?.name}`]: payload?.data,
        id: uid()
      };
    case FEEDBACK_FORM_RESET:
      return {
        nickname: '',
        email: '',
        reviewTitle: '',
        review: '',
        rating: 0
      };
    default:
      return state;
  }
};

export default feedbackReducer;
