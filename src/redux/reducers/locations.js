import {
  SET_LOCATIONS_SUCCESS,
  SET_LOCATIONS_FAIL,
  SET_LOCATIONS_LOADING,
  SET_LOCATIONS_LOADED
} from '../actions/locations';

const initialState = {
  isLoading: false,
  locations: null,
  error: []
};

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATIONS_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case SET_LOCATIONS_SUCCESS: {
      return {
        ...state,
        locations: action.payload
      };
    }
    case SET_LOCATIONS_FAIL: {
      return {
        ...state,
        error: [...state.error, action.payload]
      };
    }
    case SET_LOCATIONS_LOADED: {
      return {
        ...state,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
};

export default locationsReducer;
