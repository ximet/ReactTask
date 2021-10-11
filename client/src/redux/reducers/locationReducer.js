import { SET_LOCATION } from '../actions/locationReducer';

const initialState = {
  location: {
      id: 102643743,
      name: 'London',
      country: 'United Kingdom',
      lon: -0.125532746,
      lat: 51.508415222
  }
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION: {
      return { ...state, location: { ...action.payload } };
    }

    default: {
      return state;
    }
  }
};
