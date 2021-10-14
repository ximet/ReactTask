import { THEMES } from '../../constants/themes';
import { SET_CURRENT_THEME } from '../types/themeTypes';

const INITIAL_STATE = {
  theme: THEMES.light
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_THEME:
      return {
        ...state,
        theme: action.payload
      };

    default:
      return state;
  }
};

export default themeReducer;
