import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  AuthenticationResponse,
  CurrentWeatherData,
  DailyWeather,
  GeolocationCoordinates,
  HourlyWeather,
  LocationByQuery,
  LocationData
} from 'types';

const forecaClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {}
});

forecaClient.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const accessToken: string | null | undefined = localStorage.getItem('token');
    if (accessToken && accessToken !== 'undefined') {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      const token = await createToken();
      config.headers.Authorization = `Bearer ${token?.access_token}`;
    }
    return config;
  },
  error => {
    Promise.reject((error as Error).message);
  }
);

forecaClient.interceptors.response.use(
  async (response: AxiosResponse) => {
    const originalRequest = response.config;
    if (response.data.status === 401) {
      const token = await createToken();
      axios.defaults.headers.common.Authorization = `Bearer ${token?.access_token}`;
      return forecaClient(originalRequest);
    }
    return response;
  },
  error => {
    return Promise.reject((error as Error).message);
  }
);

export const createToken = async (): Promise<AuthenticationResponse> => {
  try {
    const result: AxiosResponse<AuthenticationResponse> = await axios.post(
      `http://localhost:5000/authorize/token?expire_hours=2`
    );
    window.localStorage.setItem('token', result.data.access_token);
    return result?.data;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export const getCurrentWeather = async (
  param: GeolocationCoordinates | null
): Promise<CurrentWeatherData> => {
  try {
    const result: AxiosResponse<{ current: CurrentWeatherData }> = await forecaClient.get(
      `/current/location=${param?.lon},${param?.lat}`
    );
    return result.data.current;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getLocation = async (param: GeolocationCoordinates | null): Promise<LocationData> => {
  try {
    const result: AxiosResponse<LocationData> = await forecaClient.get(
      `/location/${param?.lon},${param?.lat}`
    );
    return result.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getLocationByQuery = async (param: string | undefined): Promise<LocationByQuery> => {
  try {
    const result: AxiosResponse<LocationByQuery> = await forecaClient.get(
      `/location/search/${param}`
    );
    return result.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getDailyWeather = async (
  param: GeolocationCoordinates | null
): Promise<DailyWeather[]> => {
  try {
    const result: AxiosResponse<{ forecast: DailyWeather[] }> = await forecaClient.get(
      `/forecast/daily/location=${param?.lon},${param?.lat}&dataset=full`
    );
    return result.data.forecast;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getHourlyWeather = async (
  param: GeolocationCoordinates | null
): Promise<HourlyWeather[]> => {
  try {
    const result: AxiosResponse<{ forecast: HourlyWeather[] }> = await forecaClient.get(
      `/forecast/hourly/location=${param?.lon},${param?.lat}&periods=168&dataset=full`
    );
    return result.data.forecast;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
