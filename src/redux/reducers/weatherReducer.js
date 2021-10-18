import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  SET_CITY_FORECAST,
  SET_DAILY_CITY_FORECAST,
  SET_HOURLY_CITY_FORECAST
} from '../types/weatherTypes';

const INITIAL_STATE = {
  isFetching: false,
  isFetchingFailure: false,
  cityForecast: {
    relHumidity: 0,
    symbol: 'd000',
    symbolPhrase: 'no info',
    temperature: 0,
    windSpeed: 0
  },
  dailyCityForecast: [],
  hourlyCityForecast: []
};

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WEATHER_START:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false
      };

    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetchingFailure: true
      };

    case SET_CITY_FORECAST:
      return {
        ...state,
        cityForecast: action.payload.cityForecast
      };

    case SET_DAILY_CITY_FORECAST:
      return {
        ...state,
        dailyCityForecast: action.payload.dailyCityForecast
      };

    case SET_HOURLY_CITY_FORECAST:
      return {
        ...state,
        hourlyCityForecast: action.payload.hourlyCityForecast
      };

    default:
      return state;
  }
};

export default weatherReducer;
