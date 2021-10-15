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

export { themes, bgImages, urls };
