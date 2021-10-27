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

const MINSK_ID = 100625144;
const NEW_YORK_ID = 105128581;
const MOSCOW_ID = 100524901;
const TOKYO_ID = 101850147;

export const DEFAULT_CURRENT_CITY_ID = MINSK_ID;
export const DEFAULT_RECENT_CITIES_ID = [MINSK_ID, MOSCOW_ID, NEW_YORK_ID, TOKYO_ID];
