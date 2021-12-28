import axios from 'axios';
import { AUTHENTICATION, BASE_URL, QUERIES } from './api_info';

class WeatherAPI {
  constructor(baseURL, headers) {
    this.instance = axios.create({
      headers,
      baseURL
    });
    this._getTodaysWeather = this._getTodaysWeather.bind(this);
    this._getDailyWeather = this._getDailyWeather.bind(this);
    this._searchCity = this._searchCity.bind(this);
  }

  async _getTodaysWeather(pos) {
    try {
      const response = await this.instance.get(`${QUERIES.CURRENT_WEATHER}${pos.lon},${pos.lat}`);

      return response.data.current;
    } catch (error) {
      console.log(error);
    }
  }

  async _getDailyWeather(pos) {
    try {
      const response = await this.instance.get(`${QUERIES.DAILY_WEATHER}${pos.lon},${pos.lat}`);

      return response.data.forecast;
    } catch (error) {
      console.log(error);
    }
  }

  async searchCityByQuery(query) {
    try {
      const response = await this.instance.get(`${QUERIES.LOCATION_BY_QUERY}${query}`);
      return response.data.locations;
    } catch (error) {
      console.log(error);
    }
  }

  async _searchCity(pos) {
    try {
      const response = await this.instance.get(`${QUERIES.LOCATION}${pos.lon},${pos.lat}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async _getCurrentLocationCoords() {
    try {
      const {
        coords: { longitude: lon, latitude: lat }
      } = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      return { lon, lat };
    } catch (error) {
      console.log(error);
    }
  }

  async getFullCityForecast(pos = null) {
    if (!pos) {
      pos = await this._getCurrentLocationCoords();
    }

    const countryInfo = await this._searchCity(pos);
    const now = await this._getTodaysWeather(pos);
    const daily = await this._getDailyWeather(pos);

    return { now, daily, countryInfo };
  }
}

export const weatherApi = new WeatherAPI(BASE_URL, AUTHENTICATION);
