import { proxyServer, weatherApi } from './index';
import { urls } from '../globalConsts';

export const getAndSetAccessToken = async () => {
  try {
    configureAxiosInterceptors();
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

export const configureAxiosInterceptors = () => {
  weatherApi.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      if (error.response.status === 401) {
        getAndSetAccessToken();
      }
    }
  );
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

export const getHourlyWeather = async (location, params = null) => {
  try {
    const { data } = await weatherApi.get(`${urls.hourlyWeather}${location}`, {
      params
    });

    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getDailyWeather = async (location, params = null) => {
  try {
    const { data } = await weatherApi.get(`${urls.dailyWeather}${location}`, {
      params
    });

    return data;
  } catch (e) {
    console.error(e);
  }
};
