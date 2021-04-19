import {
  CURRENT_CITY_LOADED,
  CURRENT_CITY_LOADING,
  CURRENT_CITY_LOADING_FAILED,
  SET_CURRENT_CITY_NAME
} from '../actions/currentCity';

const initialState = {
  city: {},
  isLoaded: false,
  error: null,
  cityName: ''
};

const currentCity = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_CITY_LOADING: {
      return {
        ...state,
        isLoaded: false
      };
    }
    case CURRENT_CITY_LOADED: {
      return {
        ...state,
        isLoaded: true,
        city: action.payload
      };
    }
    case CURRENT_CITY_LOADING_FAILED: {
      return {
        ...state,
        isLoaded: true,
        error: action.payload
      };
    }
    case SET_CURRENT_CITY_NAME: {
      return {
        ...state,
        cityName: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export default currentCity;
