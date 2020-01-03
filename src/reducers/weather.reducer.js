import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
  GET_WEATHER_ICON_REQUEST,
  GET_WEATHER_ICON_SUCCESS,
  GET_WEATHER_ICON_FAILURE,
} from '../actions';

const initialState = {
  isGettingData: false,
  isGettingIcon: false,
  currentCityWeather: {
    temperature: null,
    city: null,
    country: null,
    time: null,
    humidity: null,
    description: null,
    iconName: null,
  },
  iconUrl: '',
  errorMessage: '',
  iconErrorMessage: '',
};

const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        isGettingData: true,
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        isGettingData: false,
        currentCityWeather: payload,
      };
    case GET_WEATHER_FAILURE:
      return {
        ...state,
        isGettingData: false,
        errorMessage: payload,
      };
    case GET_WEATHER_ICON_REQUEST:
      return {
        ...state,
        isGettingIcon: true,
      };
    case GET_WEATHER_ICON_SUCCESS:
      return {
        ...state,
        isGettingIcon: false,
        iconUrl: payload,
      };
    case GET_WEATHER_ICON_FAILURE:
      return {
        ...state,
        isGettingIcon: false,
        iconErrorMessage: payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
