import * as actionTypes from './types';

const initialState = {
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
