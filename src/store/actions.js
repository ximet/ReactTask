import { SET_LOCATION } from './types';

export const setLocation = location => {
  return {
    type: SET_LOCATION,
    payload: location
  };
};
