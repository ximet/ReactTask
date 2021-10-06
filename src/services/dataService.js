import * as axios from 'axios';
import {
  API_AUTH_URL,
  API_BASE_URL,
  DATA_TYPES,
  API_SEARCH_LOCATION_DATA_TYPE,
  API_GET_CURRENT_WEATHER_DATA_TYPE,
  API_GET_FORECAST_DATA_TYPE
} from '../constants/constants';

const instance = axios.create({
  withCredentials: true,
  baseURL: API_BASE_URL
});

export const weatherAPI = {
  token: null,
  getHeaders() {
    return {
      Authorization: `Bearer ${this.token}`
    };
  },
  async getToken(user, password) {
    const body = {
      user,
      password
    };
    try {
      const response = await instance.post(API_AUTH_URL, body, {
        headers: {
          'Content-Type': 'text/plain'
        }
      });
      this.token = response.data.access_token;
    } catch (error) {
      console.log(error);
      this.token = null;
    }

    return this.token;
  },

  async searchLocation(query) {
    const { url, dataKey } = DATA_TYPES[API_SEARCH_LOCATION_DATA_TYPE];
    try {
      const response = await instance.get(`${url}${query}`, { headers: this.getHeaders() });
      return response.data[dataKey];
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async getCurrentWeather(locationId) {
    const { url, dataKey } = DATA_TYPES[API_GET_CURRENT_WEATHER_DATA_TYPE];
    try {
      const response = await instance.get(`${url}${locationId}`, { headers: this.getHeaders() });
      return response.data[dataKey];
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async getForecast(forecastType, locationId) {
    const { url, dataKey } = DATA_TYPES[API_GET_FORECAST_DATA_TYPE];
    try {
      const response = await instance.get(`${url}${forecastType}${locationId}`, {
        headers: this.getHeaders()
      });
      return response.data[dataKey];
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};
