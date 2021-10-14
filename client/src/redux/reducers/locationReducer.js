import { SET_LOCATION } from '../actions/locationAction';

const initialState = {
  location: {
    id: 0,
    name: '',
    country: '',
    lon: 0,
    lat: 0
  }
};

export const location = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION: {
      return { ...state, location: { ...action.payload.location } };
    }

    default: {
      return state;
    }
  }
};
