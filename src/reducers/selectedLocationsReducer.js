import {
  PUT_SELECTED_LOCATION,
  DELETE_SELECTED_LOCATION,
  CLEAR_SELECTED_LOCATIONS,
  ADD_SELECTED_LOCATION,
  UPDATE_SELECTED_LOCATION
} from '../actionTypes';

const initialState = [];

const selectedLocationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SELECTED_LOCATION:
      return [...state, action.payload];

    case UPDATE_SELECTED_LOCATION:
      return state.map(data => (data.id === action.payload.id ? action.payload : data));

    case DELETE_SELECTED_LOCATION:
      return state.filter(data => data.id !== action.payload.id);
    case CLEAR_SELECTED_LOCATIONS:
      return [];

    default:
      return state;
  }
};

export default selectedLocationsReducer;
