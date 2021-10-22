import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from '../types/weatherTypes';

import { dataService } from '../../services/dataService';
import { setCityForecast, setDailyCityForecast, setHourlyCityForecast } from './weatherActions';
import { setCurrentCity } from './locationActions';
import { locationService } from '../../services/locationService';

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

export const getAllData = location => async dispatch => {
  try {
    const { cityForecast, dailyCityForecast, hourlyCityForecast, cityInfo } =
      await dataService.getFullForecast(location);

    dispatch(setCurrentCity(cityInfo));
    dispatch(setCityForecast(cityForecast));
    dispatch(setDailyCityForecast(dailyCityForecast));
    dispatch(setHourlyCityForecast(hourlyCityForecast));

    dispatch(fetchWeatherSuccess);
  } catch (error) {
    dispatch(fetchWeatherFailure(error));
  }
};

export const initApp = () => async (dispatch, getState) => {
  dispatch(fetchWeatherStart);

  const currenLocationFromGeo = await locationService.getCurrentLocation();
  const defaultLocation = getState().location.currentCity.id;
  const location = currenLocationFromGeo || defaultLocation;

  await dataService.getForecastToken();
  dispatch(getAllData(location));
};
