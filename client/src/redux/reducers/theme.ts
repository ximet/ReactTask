import { ActionType, Action } from '../actionTypes/theme';

type ThemeState = string;

const initialState = 'light';

const themeReducer = (state: ThemeState = initialState, action: Action): ThemeState => {
  switch (action.type) {
    case ActionType.TOGGLE_THEME: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default themeReducer;
