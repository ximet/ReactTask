import {
  PUT_SELECTED_LOCATION,
  DELETE_SELECTED_LOCATION,
  CLEAR_SELECTED_LOCATIONS
} from '../actionTypes';

const initialState = [];

const selectedLocationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_SELECTED_LOCATION:
      if (state.some(data => data.id === action.payload.id)) {
        return state.map(data => (data.id === action.payload.id ? action.payload : data));
      } else {
        return [...state, action.payload];
      }
    case DELETE_SELECTED_LOCATION:
      return state.filter(data => data.id !== action.payload.id);
    case CLEAR_SELECTED_LOCATIONS:
      return [];

    default:
      return state;
  }
};

export default selectedLocationsReducer;
