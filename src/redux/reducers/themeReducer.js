import { SET_CURRENT_THEME } from '../types/themeTypes';

import { THEMES } from '../../constants/themes';
import { localStorageService } from '../../services/localStorageService';

const INITIAL_STATE = {
  currentTheme: localStorageService.getCurrentTheme() || THEMES.light
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_THEME:
      return {
        ...state,
        currentTheme: action.payload.themeName
      };

    default:
      return state;
  }
};

export default themeReducer;
