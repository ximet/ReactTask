import { ACTION_TYPES } from '../constants';

const DEFAULT_IS_MORE_STATE = {
  logo: {
    source: 'smth',
    alt: 'smth',
  },
  homeIcon: {
    source: 'smth',
    alt: 'smth',
  },
  homeUrl: 'Smth',
  isMore: false,
};

const toggleButton = (state = DEFAULT_IS_MORE_STATE, { type, isMore }) => {
  switch (type) {
    case ACTION_TYPES.TOGGLE_BUTTON:
      return {
        ...state, ...isMore,
      };
    default:
      return state;
  }
};

export default toggleButton;
