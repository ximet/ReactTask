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

      console.log(token);
    } catch (error) {
      console.error(error);
    }
  },

  getWeatherData: async city => {
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
};
