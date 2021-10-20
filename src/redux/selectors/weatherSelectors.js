import { createSelector } from 'reselect';
import { getFormattedHourlyData } from '../../utils/hourlyChartSettings';

const gethourlyCityForecast = state => state.weather.hourlyCityForecast;

export const getCityForecast = state => {
  const { relHumidity, symbol, symbolPhrase, temperature, windSpeed } = state.weather.cityForecast;

  return { relHumidity, symbol, symbolPhrase, temperature, windSpeed };
};

export const getHourlyChartData = createSelector([gethourlyCityForecast], forecast =>
  getFormattedHourlyData(forecast)
);
