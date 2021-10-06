export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

export const CONTACT_US_PAGE_LINK = '/about';
export const CITIES_PAGE_LINK = '/cities';

export const API_AUTH_USERNAME = process.env.API_AUTH_USERNAME;
export const API_AUTH_PASS = process.env.API_AUTH_PASS;
export const API_BASE_URL = '/api'; //proxed to 'https://pfa.foreca.com' via webpack
export const API_AUTH_URL = '/authorize/token';
export const API_SEARCH_URL = '/api/v1/location/search/';
export const API_CURRENT_WEATHER_URL = '/api/v1/current/';
export const API_FORECAST_URL = '/api/v1/forecast/';
export const API_FORECAST_3_HOURLY = '3hourly/';
export const API_FORECAST_DAILY = 'daily/';

export const API_SEARCH_LOCATION_DATA_TYPE = 'searchLocation';
export const API_GET_CURRENT_WEATHER_DATA_TYPE = 'getCurrentWeather';
export const API_GET_FORECAST_DATA_TYPE = 'getForecast';

export const DATA_TYPES = {
  [API_SEARCH_LOCATION_DATA_TYPE]: {
    url: API_SEARCH_URL,
    dataKey: 'locations'
  },
  [API_GET_CURRENT_WEATHER_DATA_TYPE]: {
    url: API_CURRENT_WEATHER_URL,
    dataKey: 'current'
  },
  [API_GET_FORECAST_DATA_TYPE]: {
    url: API_FORECAST_URL,
    dataKey: 'forecast'
  }
};

export const API_KIEV_ID = 100703448;
