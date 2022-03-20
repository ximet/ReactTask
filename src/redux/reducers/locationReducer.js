import { SET_CURRENT_LOCATION } from '../types/locationTypes';

const locationReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_LOCATION:
      return {
        ...state,
        location: action.payload.location
      };
    default:
      return state;
  }
};

export { locationReducer };
