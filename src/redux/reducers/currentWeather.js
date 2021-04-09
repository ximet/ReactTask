import {
  SET_CURRENT_SUCCESS,
  SET_CURRENT_FAIL,
  SET_CURRENT_LOADING,
  SET_CURRENT_LOADED
} from '../actions/currentWeather';

const initialState = {
  isLoading: false,
  current: null,
  error: []
};

const currentWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case SET_CURRENT_SUCCESS: {
      return {
        ...state,
        current: action.payload
      };
    }
    case SET_CURRENT_FAIL: {
      return {
        ...state,
        error: [...state.error, action.payload]
      };
    }
    case SET_CURRENT_LOADED: {
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

export default currentWeatherReducer;
