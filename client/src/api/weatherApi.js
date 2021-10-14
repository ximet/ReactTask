import { proxyServer, weatherApi } from './index';
import { urls } from '../globalConsts';

export const getAndSetAccessToken = async () => {
  try {
    const token = await getAccessToken();
    await setAccessToken(token);
  } catch (e) {
    console.error(e);
  }
};

export const getAccessToken = async () => {
  try {
    const { data } = await proxyServer.post(urls.accessToken);
    return data.access_token;
  } catch (e) {
    console.error(e);
  }
};

export const setAccessToken = token => {
  weatherApi.interceptors.request.use(async config => {
    config.headers = {
      Authorization: `Bearer ${token}`
    };
    return config;
  });
};

export const getCurrentWeather = async location => {
  try {
    const { data } = await weatherApi.get(`${urls.currentWeather}${location}`);

    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getLocationInfo = async (latitude, longitude) => {
  try {
    const { data } = await weatherApi.get(`${urls.locationInfo}${latitude},${longitude}`);

    return data;
  } catch (e) {
    console.error(e);
  }
};

export const locationSearch = async query => {
  try {
    const { data } = await weatherApi.get(`${urls.locatonSearch}${query}`);

    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getHourlyWeather = async location => {
  try {
    const { data } = await weatherApi.get(`${urls.hourlyWeather}${location}`);

    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getDailyWeather = async location => {
  try {
    const { data } = await weatherApi.get(`${urls.dailyWeather}${location}`);

    return data;
  } catch (e) {
    console.error(e);
  }
};
