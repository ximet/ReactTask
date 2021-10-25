import {
  SET_CITY_FORECAST,
  SET_DAILY_CITY_FORECAST,
  SET_HOURLY_CITY_FORECAST
} from '../types/weatherTypes';

export const setCityForecast = forecast => ({
  type: SET_CITY_FORECAST,
  payload: forecast
});

export const setDailyCityForecast = forecast => ({
  type: SET_DAILY_CITY_FORECAST,
  payload: forecast
});

export const setHourlyCityForecast = forecast => ({
  type: SET_HOURLY_CITY_FORECAST,
  payload: forecast
});
