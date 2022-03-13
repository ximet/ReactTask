import { SET_CURRENT_LOCATION } from '../types/locationTypes';

const setCurrentLocation = location => {
  return {
    type: SET_CURRENT_LOCATION,
    payload: {
      location
    }
  };
};

export { setCurrentLocation };
