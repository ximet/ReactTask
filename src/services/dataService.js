import axios from 'axios';
import { FORECAST_PATHS } from '../constants/constants';

const instance = axios.create({
  baseURL: FORECAST_PATHS.baseURL
});

const forecastUserCredentials = {
  user: process.env.WEATHER_API_USER,
  password: process.env.WEATHER_API_PASSWORD
};

export const dataService = {
  async getForecastToken() {
    try {
      const response = await instance.post(FORECAST_PATHS.tokenURL, forecastUserCredentials);

      return response.data.access_token;
    } catch (error) {
      console.error(error);
    }
  }
};
