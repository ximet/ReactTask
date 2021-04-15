import {
  SET_LOCATIONS_REQUEST_STARTED,
  SET_LOCATIONS_REQUEST_SUCCEEDED,
  SET_LOCATIONS_REQUEST_FAILED,
  SET_LOCATIONS_REQUEST_FINISHED
} from '../actions/locations';

const initialState = {
  isLoading: false,
  locations: [],
  errors: []
};

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATIONS_REQUEST_STARTED: {
      return {
        ...state,
        isLoading: true
      };
    }
    case SET_LOCATIONS_REQUEST_SUCCEEDED: {
      return {
        ...state,
        locations: action.payload
      };
    }
    case SET_LOCATIONS_REQUEST_FAILED: {
      return {
        ...state,
        errors: [...state.errors, action.payload]
      };
    }
    case SET_LOCATIONS_REQUEST_FINISHED: {
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
