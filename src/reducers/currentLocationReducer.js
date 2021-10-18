import {
  SET_CURRENT_LOCATION_DAILY_WEATHER,
  SET_CURRENT_LOCATION_DETAILED_WEATHER,
  SET_CURRENT_LOCATION_INFO,
  SET_CURRENT_LOCATION_WEATHER
} from '../actionTypes';

const initialState = {
  info: null,
  weather: null,
  dailyWeather: null,
  detailedWeather: null
};

const currentLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LOCATION_INFO:
      return {
        ...state,
        info: action.payload.info
      };
    case SET_CURRENT_LOCATION_WEATHER:
      return {
        ...state,
        weather: action.payload.weather
      };
    case SET_CURRENT_LOCATION_DAILY_WEATHER:
      return {
        ...state,
        dailyWeather: action.payload.dailyWeather
      };
    case SET_CURRENT_LOCATION_DETAILED_WEATHER:
      return {
        ...state,
        detailedWeather: action.payload.detailedWeather
      };

    default:
      return state;
  }
};

export default currentLocationReducer;
