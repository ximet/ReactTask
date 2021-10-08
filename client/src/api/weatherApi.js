import { proxyServer, weatherApi } from './index';
import { urls } from '../globalConsts';

export const getAccessToken = async () => {
  try {
    const { data } = await proxyServer.post(urls.accessToken);
    return data.access_token;
  } catch (e) {
    console.error(e);
  }
};

export const setAccessToken = (token) => {
  weatherApi.interceptors.request.use({headers: { Authorization: `Bearer ${token}` }})
}

export const getCurrentWeather = async (location) => {
  try {
    const { data } = await weatherApi.get(`${urls.currentWeather}${location}`);

    return data;
  } catch (e) {
    console.error(e);
  }
};

export const locationSearch = async (query, token) => {
  try {
    const { data } = await weatherApi.get(`${urls.locatonSearch}${query}`);

    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getHourlyWeather = async (location, token) => {
  try {
    const { data } = await weatherApi.get(`${urls.hourlyWeather}${location}`);

    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getDailyWeather = async (location, token) => {
  try {
    const { data } = await weatherApi.get(`${urls.dailyWeather}${location}`);
    
    return data;
  } catch (e) {
    console.error(e);
  }
};
