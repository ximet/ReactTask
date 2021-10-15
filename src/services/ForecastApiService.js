import ForecastApi from '../api/ForecastApi';

const ApiService = {
  getLocationsSearch: async locationQueryStr =>
    await ForecastApi.getData(`/api/v1/location/search/${locationQueryStr}`),

  getCurrentForecast: async locationId =>
    await ForecastApi.getData(`/api/v1/current/${locationId}`),

  getLocationInfo: async locationId => await ForecastApi.getData(`/api/v1/location/${locationId}`),

  getHourlyForecast: async locationId =>
    await ForecastApi.getData(`/api/v1/forecast/hourly/${locationId}`),

  getDailyForecast: async locationId =>
    await ForecastApi.getData(`/api/v1/forecast/daily/${locationId}`)
};

export default ApiService;
