import { getDayOfMonth, getDayOfWeek, formatTime, formatDate, upperCaseLetter } from '../assets';
import { getImagesURL } from './api'; 

const IMAGES_TYPE = {
  flag: 'flag',
  symbol: 'symbol'
}

export function formatCurrentForecastData(forecastData) {
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
  } = forecastData.current;
  
  const formattedForecastData = {
    temperature,
    feelsLikeTemp,
    symbolUrl: getImagesURL(IMAGES_TYPE.symbol, symbol),
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

export function formatLocationData(locationData) {
  const { name } = locationData;

  return {city: name};
}

export function formatDailyForecastData(forecastData) {
  const formattedForecastData = [];

  forecastData.forecast.forEach(item => {
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
    symbolUrl: getImagesURL(IMAGES_TYPE.symbol, symbol),
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

  forecastData.forecast.forEach(item => {
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
    symbolUrl: getImagesURL(IMAGES_TYPE.symbol, symbol),
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

export function formatLocationsInfo(locationsInfo, flagsDomain) {
  const countries = getCountries(locationsInfo);
  const formattedLocationsInfo = [];

  countries.forEach(country => {
    formattedLocationsInfo.push({country, flagURL: getImagesURL(IMAGES_TYPE.flag, flagsDomain[country])});
  })

  formattedLocationsInfo.forEach(formattedLocationInfo => addCities(formattedLocationInfo, locationsInfo))

  return formattedLocationsInfo;
}

function getCountries(locationsInfo) {
  const countries = new Set();

  locationsInfo.forEach(locationInfo => {
      countries.add(locationInfo.country);
  })

  return countries;
}

function addCities(formattedLocationInfo, locationsInfo) {
  const cities = [];

  locationsInfo.forEach(locationInfo => {
      if(locationInfo.country === formattedLocationInfo.country) cities.push(locationInfo.city);
  })

  formattedLocationInfo.cities = cities;
}