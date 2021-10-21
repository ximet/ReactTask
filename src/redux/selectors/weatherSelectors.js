import { createSelector } from 'reselect';
import { getFormattedHourlyData } from '../../utils/hourlyChartSettings';

const gethourlyCityForecast = state => state.weather.hourlyCityForecast;

export const getCityForecast = state => state.weather.cityForecast;

export const getHourlyChartData = createSelector([gethourlyCityForecast], forecast =>
  getFormattedHourlyData(forecast)
);
