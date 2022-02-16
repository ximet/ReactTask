import { getDayOfMonth, getDayOfWeek, formatTime, formatDate, upperCaseLetter } from '../assets';
import { getSymbolUrl } from './api'; 

export function formatCurrentForecastData(forecastData, locationData) {
  const {
    temperature,
    feelsLikeTemp,
    symbol,
    symbolPhrase,
    time,
    cloudiness,
    relHumidity,
    precipProb,
    windSpeed,
    thunderProb
  } = forecastData;
  const { name } = locationData;
  
  const formattedForecastData = {
    city: name,
    temperature,
    feelsLikeTemp,
    symbolUrl: getSymbolUrl(symbol),
    symbol: symbol,
    symbolPhrase: upperCaseLetter(symbolPhrase),
    time: formatDate(time),
    details: {
      cloudiness,
      precipProb,
      relHumidity,
      windSpeed,
      thunderProb
    }
  };

  return formattedForecastData;
}

export function formatDailyForecastData(forecastData) {
  const formattedForecastData = [];

  forecastData.forEach(item => {
    const formattedForecastItemData = formatDailyForecastItemData(item);

    formattedForecastData.push(formattedForecastItemData);
  });

  return formattedForecastData;
}

function formatDailyForecastItemData(data) {
  const {
    date,
    maxTemp,
    minTemp,
    cloudiness,
    sunrise,
    sunset,
    maxWindSpeed,
    maxRelHumidity,
    precipProb,
    symbol,
    symbolPhrase
  } = data;

  const formattedData = {
    id: date,
    dayOfMonth: getDayOfMonth(date),
    dayOfWeek: [getDayOfWeek(date), getDayOfWeek(date, 'full')],
    maxTemp,
    minTemp,
    symbolUrl: getSymbolUrl(symbol),
    symbol: symbol,
    symbolPhrase: upperCaseLetter(symbolPhrase),
    details: {
      cloudiness,
      sunrise: formatTime(sunrise),
      sunset: formatTime(sunset),
      windSpeed: maxWindSpeed,
      relHumidity: maxRelHumidity,
      precipProb
    }
  };

  return formattedData;
}

export function formatHourlyForecastData(forecastData) {
  const formattedForecastData = [];

  forecastData.forEach(item => {
    const formattedForecastItemData = formatHourlyForecastItemData(item);

    formattedForecastData.push(formattedForecastItemData);
  });

  return formattedForecastData;
}

function formatHourlyForecastItemData(data) {
  const { time, symbol, temperature } = data;

  const formattedData = {
    date: time,
    time: formatDate(time),
    symbolUrl: getSymbolUrl(symbol),
    symbol: symbol,
    temperature
  };

  return formattedData;
}

export function filterDayForecastData(dailyData, id) {
  const formattedDate = dailyData.filter(dayData => dayData.id === id);

  return formattedDate[0];
}

export function filterHourForecastData(hourlyData, id) {
  const formattedDate = hourlyData.filter(data => data.date.includes(id));

  return formattedDate;
}
