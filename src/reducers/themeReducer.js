import { SET_THEME } from '../actionTypes';
import { THEME_LIGHT } from '../constants/constants';

const initialState = {
  name: THEME_LIGHT
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        name: action.payload.name
      };

    default:
      return state;
  }
};

export default themeReducer;
