import { SET_CURRENT_LOCATION } from '../types/locationTypes';

const INITIAL_STATE = {
  currentLocation: {
    country: 'Belarus',
    id: 100625144,
    name: 'Minsk'
  }
};

const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.payload
      };

    default:
      return state;
  }
};

export default locationReducer;
