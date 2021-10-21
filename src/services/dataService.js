import axios from 'axios';
import { FORECAST_PATHS, FORECAST_TYPES } from '../constants/forecaApi';

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
    const cityForecast = await this.getCurrentForecast(id);
    const dailyCityForecast = await this.getForecast(FORECAST_TYPES.day, id);
    const hourlyCityForecast = await this.getForecast(FORECAST_TYPES.hour, id);

    return {
      cityForecast: cityForecast.current,
      dailyCityForecast: dailyCityForecast.forecast,
      hourlyCityForecast: hourlyCityForecast.forecast
    };
  },

  searchCity: async function (city) {
    try {
      const response = await instance.get(`${FORECAST_PATHS.searchCityUrl}${city}`, {
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
      const response = await instance.get(`${FORECAST_PATHS.getCityInfoUrl}${id}`, {
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
    const response = await instance.get(`${FORECAST_PATHS.getCurrentWeatherUrl}${id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });

    return response.data;
  },

  getForecast: async function (type, id) {
    const response = await instance.get(`${FORECAST_PATHS.getForecastUrl}${type}${id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });

    return response.data;
  }
};
