import {
  SET_SITY_FORECAST,
  SET_DAILY_SITY_FORECAST,
  SET_HOURLY_SITY_FORECAST
} from '../types/weatherTypes';

export const setCityForecast = forecast => ({
  type: SET_SITY_FORECAST,
  payload: forecast
});

export const setDailyCityForecast = forecast => ({
  type: SET_DAILY_SITY_FORECAST,
  payload: forecast
});

export const setHourlyCityForecast = forecast => ({
  type: SET_HOURLY_SITY_FORECAST,
  payload: forecast
});
