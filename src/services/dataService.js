import * as axios from 'axios';
import {
  API_AUTH_URL,
  API_BASE_URL,
  DATA_TYPES,
  API_SEARCH_LOCATION_DATA_TYPE,
  API_GET_CURRENT_WEATHER_DATA_TYPE,
  API_GET_FORECAST_DATA_TYPE,
  API_GET_LOCATION_INFO_DATA_TYPE
} from '../constants/constants';

const instance = axios.create({
  withCredentials: true,
  baseURL: API_BASE_URL
});

export const weatherAPI = {
  token: null,
  getAuthHeaders() {
    return {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
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

  async getData(dataType, param) {
    const { url, dataKey } = DATA_TYPES[dataType];
    try {
      const response = await instance.get(url + param, this.getAuthHeaders());
      return response.data[dataKey] ? response.data[dataKey] : response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async searchLocation(query) {
    const { url, dataKey } = DATA_TYPES[API_SEARCH_LOCATION_DATA_TYPE];
    try {
      const response = await instance.get(url + query, this.getAuthHeaders());
      return response.data[dataKey];
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async getLocationInfo(locationId) {
    const { url } = DATA_TYPES[API_GET_LOCATION_INFO_DATA_TYPE];
    try {
      const response = await instance.get(url + locationId, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async getCurrentWeather(locationId) {
    const { url, dataKey } = DATA_TYPES[API_GET_CURRENT_WEATHER_DATA_TYPE];
    try {
      const response = await instance.get(url + locationId, this.getAuthHeaders());
      return response.data[dataKey];
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async getForecast(forecastType, locationId, periods = '') {
    const { url, dataKey } = DATA_TYPES[API_GET_FORECAST_DATA_TYPE];
    periods = periods ? '?periods=' + periods : '';

    try {
      const response = await instance.get(
        url + forecastType + locationId + periods,
        this.getAuthHeaders()
      );
      return response.data[dataKey];
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};
