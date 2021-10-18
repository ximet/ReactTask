import nightBgImage from '../public/images/nightBgImage.png';
import sunnyBgImage from '../public/images/sunnyBgImage.png';

const urls = {
  accessToken: '/getAccessToken',
  currentWeather: '/v1/current/',
  locatonSearch: '/v1/location/search/',
  hourlyWeather: '/v1/forecast/hourly/',
  dailyWeather: '/v1/forecast/daily/',
  locationInfo: '/api/v1/location/'
};

const themes = {
  light: 'light',
  dark: 'dark'
};

const bgImages = {
  dark: nightBgImage,
  light: sunnyBgImage
};

const defaultDateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: '2-digit'
};

const dailyWeatherDateOptions = {
  day: '2-digit',
  month: 'short'
};

const defaultTimeOptions = {
  hour: '2-digit',
  minute: '2-digit'
};

const dateFormat = 'en-US';

const temperatureUnits = '°C';

export {
  themes,
  bgImages,
  urls,
  defaultDateOptions,
  defaultTimeOptions,
  dateFormat,
  dailyWeatherDateOptions,
  temperatureUnits
};
