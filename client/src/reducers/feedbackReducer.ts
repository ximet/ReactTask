import { Feedback } from 'types';
import { uid } from 'utils/uid';

export type ActionData = {
  type: string;
  payload?: {
    name: string;
    data?: string | number | readonly string[] | undefined;
  };
};
export const CREATE_FEEDBACK_SUCCESS = 'CREATE_FEEDBACK_SUCCESS';
export const FEEDBACK_FORM_RESET = 'FEEDBACK_FORM_RESET';

const feedbackReducer = (state: Feedback, { type, payload }: ActionData) => {
  switch (type) {
    case CREATE_FEEDBACK_SUCCESS:
      return {
        ...state,
        [`${payload?.name}`]: payload?.data,
        id: uid()
      };
    case FEEDBACK_FORM_RESET:
      return {
        nickname: '',
        email: '',
        title: '',
        review: '',
        rating: 0
      };
    default:
      return state;
  }
};

export default feedbackReducer;
