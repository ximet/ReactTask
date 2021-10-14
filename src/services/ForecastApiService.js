import ForecastApi from '../api/ForecastApi';

const ApiService = {
  getLocationsSearch: async function (locationQueryStr, cookies) {
    return await ForecastApi.getData(`/api/v1/location/search/${locationQueryStr}`);
  },

  getCurrentForecast: async function (locationId, cookies) {
    return await ForecastApi.getData(`/api/v1/current/${locationId}`);
  },

  getLocationInfo: async function (locationId, cookies) {
    return await ForecastApi.getData(`/api/v1/location/${locationId}`);
  },

  getHourlyForecast: async function (locationId, cookies) {
    return await ForecastApi.getData(`/api/v1/forecast/hourly/${locationId}`);
  },

  getDailyForecast: async function (locationId, cookies) {
    return await ForecastApi.getData(`/api/v1/forecast/daily/${locationId}`);
  }
};

export default ApiService;
