import { SET_TOKEN } from '../types/tokenTypes';

const tokenReducer = (state = '', action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload.token
      };
    default:
      return state;
  }
};

export { tokenReducer };
