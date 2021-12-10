import { CHANGE_TITLE } from '../actions';

const INITIAL_STATE = {
  title: 'HOME'
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_TITLE: {
      return { ...state, title: action.payload };
    }
    default:
      return state;
  }
};

export default homeReducer;
