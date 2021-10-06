import axios from 'axios';
import { FORECAST_PATHS, FORECAST_TYPES } from '../constants/constants';

const instance = axios.create({
  baseURL: FORECAST_PATHS.baseUrl
});

const forecastUserCredentials = {
  user: process.env.WEATHER_API_USER,
  password: process.env.WEATHER_API_PASSWORD
};

export const dataService = {
  token: null,

  getForecastToken: async function () {
    try {
      const response = await instance.post(FORECAST_PATHS.tokenUrl, forecastUserCredentials);

      this.token = response.data.access_token;
    } catch (error) {
      console.error(error);
    }
  },

  getFullForecast: async function (id) {
    try {
      const cityForecast = await this.getCurrentForecast(id);
      const dailyCityForecast = await this.getForecast(FORECAST_TYPES.day, id);
      const hourlyCityForecast = await this.getForecast(FORECAST_TYPES.hour, id);
      const cityInfo = await this.getCityInfo(id);

      return { cityForecast, dailyCityForecast, hourlyCityForecast, cityInfo };
    } catch (error) {
      console.error(error);
    }
  },

  searchCity: async function (city) {
    try {
      const response = await instance.get(FORECAST_PATHS.searchCityUrl + city, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  getCityInfo: async function (id) {
    try {
      const response = await instance.get(FORECAST_PATHS.getCityInfoUrl + id, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  getCurrentForecast: async function (id) {
    try {
      const response = await instance.get(FORECAST_PATHS.getCurrentWeatherUrl + id, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  getForecast: async function (type, id) {
    try {
      const response = await instance.get(FORECAST_PATHS.getForecastUrl + type + id, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
};
