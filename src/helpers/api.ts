import axios, { AxiosResponse } from 'axios';
import { AxiosOptions, Url } from './helpersInterfaces';

export const URL: Url = {
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

function options(url: string, param: string): AxiosOptions {
  const forecaUrl: string = 'https://pfa.foreca.com/api/v1/';
  const accessToken: string = document.cookie.slice(6);
  return {
    url: forecaUrl + url + param,
    withCredentials: false,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };
}

export async function getData(url: string, param: string): Promise<any> {
  return axios.request(options(url, param)).then(response => {
    return response.data;
  });
}

export function getMultipleData(urls: string[], param: string): Promise<any[]> {
  const requests: Promise<AxiosResponse<any>>[] = urls.map(url => {
    return axios.request(options(url, param));
  });

  return axios.all(requests).then(
    axios.spread((...responses) => {
      return responses.map(response => {
        return response.data;
      });
    })
  );
}
