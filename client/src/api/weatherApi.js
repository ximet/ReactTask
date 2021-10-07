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

export const getCurrentWeather = async (location, token) => {
  try {
    const { data } = await weatherApi.get(`${urls.currentWeather}${location}`, {
        headers: {  Authorization: `Bearer ${token}` }
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const locationSearch = async (query, token) => {
  try {
    const { data } = await weatherApi.get(`${urls.locatonSearch}${query}`, {
        headers: {  Authorization: `Bearer ${token}` }
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getHourlyWeather = async (location, token) => {
    try {
      const { data } = await weatherApi.get(`${urls.hourlyWeather}${location}`, {
          headers: {  Authorization: `Bearer ${token}` }
      });
      return data;
    } catch (e) {
      console.error(e);
    }
};

export const getDailyWeather = async (location, token) => {
    try {
      const { data } = await weatherApi.get(`${urls.dailyWeather}${location}`, {
          headers: {  Authorization: `Bearer ${token}` }
      });
      return data;
    } catch (e) {
      console.error(e);
    }
};