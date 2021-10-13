import {
  SET_SITY_FORECAST,
  SET_DAILY_SITY_FORECAST,
  SET_HOURLY_SITY_FORECAST
} from '../types/weatherTypes';

const INITIAL_STATE = {
  weatherToken: '',
  isLoadingData: true,
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
    case SET_SITY_FORECAST:
      return {
        ...state,
        cityForecast: action.payload
      };

    case SET_DAILY_SITY_FORECAST:
      return {
        ...state,
        dailyCityForecast: action.payload
      };

    case SET_HOURLY_SITY_FORECAST:
      return {
        ...state,
        hourlyCityForecast: action.payload
      };

    default:
      return state;
  }
};

export default weatherReducer;
