import * as actions from './actions';

const initialState = {
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.setAuth:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
