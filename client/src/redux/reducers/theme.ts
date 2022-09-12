import { ActionType, Action } from '../actionTypes/theme';

interface ThemeState {
  theme: string;
}

const initialState = {
  theme: 'light'
};

const themeReducer = (state: ThemeState = initialState, action: Action): ThemeState => {
  switch (action.type) {
    case ActionType.TOGGLE_THEME: {
      return {
        ...state,
        theme: action.payload
      };
    }
    default:
      return state;
  }
};

export default themeReducer;
