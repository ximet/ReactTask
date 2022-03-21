import { SET_LOCATION } from '../types';

const defaultState = {};

const locationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return action.payload;
    default:
      return state;
  }
};

export default locationReducer;
