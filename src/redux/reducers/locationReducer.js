import { SET_LOCATION_INFO } from '../types/locationTypes';

const INITIAL_STATE = {
  locationInfo: {
    country: 'Belarus',
    id: 100625144,
    name: 'Minsk'
  }
};

export const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOCATION_INFO:
      return {
        ...state,
        locationInfo: action.payload
      };
  }
};
