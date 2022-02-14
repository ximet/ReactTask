import {formatCurrentForecastData, formatDailyForecastData, formatHourlyForecastData} from './formatter';
import { getLocationData, getCurrentWeatherFromApi, getDailyForecastFromApi, getHourlyForecastFromApi} from './api';

export default {
  getCurrentForecast,
  getDailyForecast,
  getHourlyForecast
};

async function getCurrentForecast() {
  const locationData = await getLocationData();
  const forecastData = await getCurrentWeatherFromApi();

  const formattedData = formatCurrentForecastData(forecastData, locationData);

  return formattedData;
}

async function getDailyForecast() {
  const dailyData = await getDailyForecastFromApi();
  const formattedData = formatDailyForecastData(dailyData);

  return formattedData;
}

async function getHourlyForecast() {
  const hourlyData = await getHourlyForecastFromApi();
  const formattedData = formatHourlyForecastData(hourlyData);

  return formattedData;
}
