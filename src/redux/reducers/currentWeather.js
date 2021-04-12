import {
  SET_CURRENT_WEATHER_REQUEST_STARTED,
  SET_CURRENT_WEATHER_REQUEST_SUCCEEDED,
  SET_CURRENT_WEATHER_REQUEST_FAILED,
  SET_CURRENT_WEATHER_REQUEST_FINISHED
} from '../actions/currentWeather';

const initialState = {
  isLoading: false,
  current: null,
  errors: []
};

const currentWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_WEATHER_REQUEST_STARTED: {
      return {
        ...state,
        isLoading: true
      };
    }
    case SET_CURRENT_WEATHER_REQUEST_SUCCEEDED: {
      return {
        ...state,
        current: action.payload
      };
    }
    case SET_CURRENT_WEATHER_REQUEST_FAILED: {
      return {
        ...state,
        errors: [...state.errors, action.payload]
      };
    }
    case SET_CURRENT_WEATHER_REQUEST_FINISHED: {
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
