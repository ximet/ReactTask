import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { EndpointsConfig } from './Interfaces';

export const ENDPOINTS: EndpointsConfig = {
  auth: 'http://localhost:3000/auth',
  locationSearch: 'location/search/',
  locationInfo: 'location/',
  observations: 'observation/latest/',
  current: 'current/',
  nowCast: 'forecast/15minutely/',
  hourly: 'forecast/hourly/',
  threeHourly: 'forecast/3hourly/',
  daily: 'forecast/daily/',
  airQuality: 'air-quality/forecast/hourly/'
};

//param - location or id
function options(endpoint: string, param: string): AxiosRequestConfig {
  const forecaUrl: string = 'https://pfa.foreca.com/api/v1/';
  const accessToken: string = document.cookie.slice(6);
  return {
    url: forecaUrl + endpoint + param,
    withCredentials: false,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };
}

export async function getData(endpoint: string, param: string): Promise<any> {
  return axios.request(options(endpoint, param)).then(response => {
    return response.data;
  });
}

export function getMultipleData(endpoints: string[], param: string): Promise<any[]> {
  const requests: Promise<AxiosResponse<any>>[] = endpoints.map(endpoint => {
    return axios.request(options(endpoint, param));
  });
  return axios.all(requests).then(
    axios.spread((...responses) => {
      return responses.map(response => {
        return response.data;
      });
    })
  );
}
