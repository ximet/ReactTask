import {
  formatCurrentForecastData,
  formatDailyForecastData,
  formatHourlyForecastData
} from './formatter';
import {
  getCurrentWeatherFromApi,
  getDailyForecastFromApi,
  getHourlyForecastFromApi
} from './api';

export default {
  getCurrentForecast,
  getDailyForecast,
  getHourlyForecast,
  setReview
};

async function getCurrentForecast(location) {
  const [forecastData, locationData] = await getCurrentWeatherFromApi(location);

  const formattedData = formatCurrentForecastData(forecastData, locationData);

  return formattedData;
}

async function getDailyForecast(location) {
  const dailyData = await getDailyForecastFromApi(location);
  const formattedData = formatDailyForecastData(dailyData);

  return formattedData;
}

async function getHourlyForecast(location) {
  const hourlyData = await getHourlyForecastFromApi(location);
  const formattedData = formatHourlyForecastData(hourlyData);

  return formattedData;
}

function setReview(review) {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.push(review);

  localStorage.setItem('reviews', JSON.stringify(reviews));
}
