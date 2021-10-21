import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  SET_CITY_FORECAST,
  SET_DAILY_CITY_FORECAST,
  SET_HOURLY_CITY_FORECAST
} from '../types/weatherTypes';

import { dataService } from '../../services/dataService';
import { FETCHING_ERROR_TEXT } from '../../constants/forecaApi';

const fetchWeatherStart = {
  type: FETCH_WEATHER_START
};

const fetchWeatherSuccess = {
  type: FETCH_WEATHER_SUCCESS
};

const fetchWeatherFailure = error => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error
});

const setCityForecast = forecast => ({
  type: SET_CITY_FORECAST,
  payload: forecast
});

const setDailyCityForecast = forecast => ({
  type: SET_DAILY_CITY_FORECAST,
  payload: forecast
});

const setHourlyCityForecast = forecast => ({
  type: SET_HOURLY_CITY_FORECAST,
  payload: forecast
});

export const getWeatherInfo = location => async dispatch => {
  dispatch(fetchWeatherStart);

  try {
    // await dataService.getForecastToken();

    const { cityForecast, dailyCityForecast, hourlyCityForecast } =
      await dataService.getFullForecast(location);

    dispatch(setCityForecast(cityForecast));
    dispatch(setDailyCityForecast(dailyCityForecast));
    dispatch(setHourlyCityForecast(hourlyCityForecast));

    dispatch(fetchWeatherSuccess);
  } catch (error) {
    dispatch(fetchWeatherFailure(FETCHING_ERROR_TEXT));
  }
};
