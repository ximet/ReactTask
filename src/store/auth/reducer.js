import * as actionTypes from './types';

const initialState = {
  isLoggedIn: false,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
