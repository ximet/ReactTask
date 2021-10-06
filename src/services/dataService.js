import axios from 'axios';
import { FORECAST_PATHS } from '../constants/constants';

let token = '';

const instance = axios.create({
  baseURL: FORECAST_PATHS.baseUrl
});

const forecastUserCredentials = {
  user: process.env.WEATHER_API_USER,
  password: process.env.WEATHER_API_PASSWORD
};

export const dataService = {
  getForecastToken: async () => {
    try {
      const response = await instance.post(FORECAST_PATHS.tokenUrl, forecastUserCredentials);

      token = response.data.access_token;
    } catch (error) {
      console.error(error);
    }
  },

  searchCity: async city => {
    try {
      const response = await instance.get(FORECAST_PATHS.searchCityUrl + city, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  getFullForecast: async function (id) {
    try {
      const cityForecast = await this.getCurrentForecast(id);
      const dailyCityForecast = await this.getDailyForecast(id);
      const hourlyCityForecast = await this.getHourlyForecast(id);

      return { cityForecast, dailyCityForecast, hourlyCityForecast };
    } catch (error) {
      console.error(error);
    }
  },

  getCurrentForecast: async id => {
    try {
      const response = await instance.get(FORECAST_PATHS.getCurrentWeather + id, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  getDailyForecast: async id => {
    try {
      const response = await instance.get(FORECAST_PATHS.getDailyForecast + id, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  getHourlyForecast: async id => {
    try {
      const response = await instance.get(FORECAST_PATHS.getHourlyForecast + id, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
};
