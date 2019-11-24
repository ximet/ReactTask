import { ACTION_TYPES } from '../constants';

const DEFAULT_IS_MORE_STATE = {
  isMore: false,
};

const toggleButton = (state = DEFAULT_IS_MORE_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.TOGGLE_BUTTON:
      return [
        ...state, {
          isMore: !payload.isMore,
        },
      ];
    default:
      return state;
  }
};

export default toggleButton;
