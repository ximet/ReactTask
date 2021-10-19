import { createSelector } from 'reselect';
import { getCorrectHourlyData } from '../../utils/hourlyChartSettings';

const gethourlyCityForecast = state => state.weather.hourlyCityForecast;

export const getHourlyChartData = createSelector([gethourlyCityForecast], forecast =>
  getCorrectHourlyData(forecast)
);
