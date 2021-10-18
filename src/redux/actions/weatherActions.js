import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  SET_CITY_FORECAST,
  SET_DAILY_CITY_FORECAST,
  SET_HOURLY_CITY_FORECAST
} from '../types/weatherTypes';

import { dataService } from '../../services/dataService';

export const fetchWeatherStart = {
  type: FETCH_WEATHER_START
};

export const fetchWeatherSuccess = {
  type: FETCH_WEATHER_SUCCESS
};

export const fetchWeatherFailure = errorMessage => ({
  type: FETCH_WEATHER_FAILURE,
  payload: errorMessage
});

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

export const getCityInfo = location => async dispatch => {
  dispatch(fetchWeatherStart);

  try {
    await dataService.getForecastToken();

    const { cityForecast, dailyCityForecast, hourlyCityForecast } =
      await dataService.getFullForecast(location);

    dispatch(setCityForecast(cityForecast));
    dispatch(setDailyCityForecast(dailyCityForecast));
    dispatch(setHourlyCityForecast(hourlyCityForecast));

    dispatch(fetchWeatherSuccess());
  } catch (error) {
    dispatch(fetchWeatherFailure());
  }
};
