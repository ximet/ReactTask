import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from '../types/weatherTypes';

import { dataService } from '../../services/dataService';
import { setCityForecast, setDailyCityForecast, setHourlyCityForecast } from './weatherActions';
import { setCurrentCity, setRecentCity } from './locationActions';
import { locationService } from '../../services/locationService';
import { DEFAULT_RECENT_CITIES_ID, DEFAULT_CURRENT_CITY_ID } from '../../constants/forecaApi';

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

export const initApp = () => async dispatch => {
  dispatch(fetchWeatherStart);

  const currenLocationFromGeo = await locationService.getCurrentLocation();
  const defaultLocation = DEFAULT_CURRENT_CITY_ID;
  const location = currenLocationFromGeo || defaultLocation;

  await dataService.getForecastToken();

  const cityInfoPromises = DEFAULT_RECENT_CITIES_ID.map(id => dataService.getCityInfo(id));

  const citiesInfo = await Promise.all(cityInfoPromises);
  citiesInfo.forEach(info => {
    dispatch(setRecentCity(info));
  });

  dispatch(getAllData(location));
};
