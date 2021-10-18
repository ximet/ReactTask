import { SET_LOCATION } from '../actions/locationAction';

const initialState = {
  id: 0,
  name: '',
  country: '',
  lon: 0,
  lat: 0
};

export const location = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION: {
      return { ...action.payload.location };
    }

    default: {
      return state;
    }
  }
};
