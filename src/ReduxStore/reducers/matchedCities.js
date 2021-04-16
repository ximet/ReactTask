import {
  MATCHED_CITIES_DATA_LOADING,
  MATCHED_CITIES_DATA_LOADED,
  MATCHED_CITIES_DATA_FAIL,
  MATCHED_CITIES_DATA_ERASE
} from '../actions/matchedCities';

const initialState = {
  cities: [],
  isLoaded: false,
  error: null
};

const matchedCities = (state = initialState, action) => {
  switch (action.type) {
    case MATCHED_CITIES_DATA_LOADING: {
      return {
        ...state,
        isLoaded: false
      };
    }
    case MATCHED_CITIES_DATA_LOADED: {
      return {
        ...state,
        isLoaded: true,
        cities: action.payload
      };
    }
    case MATCHED_CITIES_DATA_FAIL: {
      return {
        ...state,
        isLoaded: false,
        error: action.payload
      };
    }
    case MATCHED_CITIES_DATA_ERASE: {
      return {
        ...state,
        cities: []
      };
    }
    default: {
      return state;
    }
  }
};

export default matchedCities;
