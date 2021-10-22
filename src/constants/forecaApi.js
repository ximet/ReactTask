export const FORECAST_PATHS = {
  baseUrl: '/api',
  tokenUrl: '/authorize/token',
  searchCityUrl: '/api/v1/location/search/',
  getCityInfoUrl: '/api/v1/location/',
  getCurrentWeatherUrl: '/api/v1/current/',
  getForecastUrl: '/api/v1/forecast/',
  getForecastUrl: '/api/v1/forecast/',
  getIconUrl: 'https://developer.foreca.com/static/images/symbols/'
};

export const FORECAST_TYPES = {
  day: 'daily/',
  hour: 'hourly/'
};

export const FETCHING_ERROR_TEXT = 'Sory. Have no acsess to server. Try to refresh page later.';

const MINSK_CITY_DATA = {
  id: 100625144,
  name: 'Minsk',
  country: 'Belarus'
};

const NEW_YORK_CITY_DATA = {
  id: 105128581,
  name: 'New York'
};

const MOSCOW_CITY_DATA = {
  id: 100524901,
  name: 'Moscow'
};

const TOKYO_CITY_DATA = {
  id: 101850147,
  name: 'Tokyo'
};

export const DEFAULT_CURRENT_CITY = MINSK_CITY_DATA;
//remove after integration with weather
export const CURRENT_CITY_ID = MINSK_CITY_DATA.id;

export const DEFAULT_RECENT_CITIES = [
  MINSK_CITY_DATA,
  MOSCOW_CITY_DATA,
  NEW_YORK_CITY_DATA,
  TOKYO_CITY_DATA
];
