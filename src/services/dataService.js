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
    let response = instance.post(API_AUTH_URL, body, {
      headers: {
        'Content-Type': 'text/plain'
      }
    });

    try {
      const result = await response;
      this.token = result.data.access_token;
    } catch (error) {
      console.log(error);
      this.token = null;
    }

    return response;
  },

  searchLocation(query) {
    const { url, dataKey } = DATA_TYPES[API_SEARCH_LOCATION_DATA_TYPE];

    const response = instance
      .get(`${url}${query}`, {
        headers: this.getHeaders()
      })
      .then(({ data }) => data[dataKey]);

    return response;
  },

  getLocationInfo(location) {
    const { url } = DATA_TYPES[API_GET_LOCATION_INFO_DATA_TYPE];

    const response = instance
      .get(`${url}${location}`, {
        headers: this.getHeaders()
      })
      .then(({ data }) => data);

    return response;
  },

  getCurrentWeather(locationId) {
    const { url, dataKey } = DATA_TYPES[API_GET_CURRENT_WEATHER_DATA_TYPE];

    const response = instance
      .get(`${url}${locationId}`, {
        headers: this.getHeaders()
      })
      .then(({ data }) => data[dataKey]);

    return response;
  },

  getForecast(forecastEndpoint, locationId, params = null) {
    const { url, dataKey } = DATA_TYPES[API_GET_FORECAST_DATA_TYPE];

    const response = instance
      .get(`${url}${forecastEndpoint}${locationId}`, {
        headers: this.getHeaders(),
        params
      })
      .then(({ data }) => data[dataKey]);

    return response;
  }
};
