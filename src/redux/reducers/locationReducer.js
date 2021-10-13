import { SET_LOCATION_INFO } from '../types/locationTypes';

const INITIAL_STATE = {
  locationInfo: {
    country: 'Belarus',
    id: 100625144,
    name: 'Minsk'
  }
};

const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOCATION_INFO:
      return {
        ...state,
        locationInfo: action.payload
      };

    default:
      return state;
  }
};

export default locationReducer;
