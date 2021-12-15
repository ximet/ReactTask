import { AUTHENTICATE } from '../../actions/types';

const INITIAL_STATE = {};
const authenticationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export default authenticationReducer;
