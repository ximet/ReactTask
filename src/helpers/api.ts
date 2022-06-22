import axios from 'axios';

export const URL = {
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

function options(url: string, param: string) {
  const forecaUrl = 'https://pfa.foreca.com/api/v1/';
  const accessToken = document.cookie.slice(6);
  return {
    url: forecaUrl + url + param,
    withCredentials: false,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };
}

export async function getData(url: string, param: string) {
  return axios.request(options(url, param)).then(response => {
    return response.data;
  });
}

export function getMultipleData(urls: string[], param: string) {
  const requests = urls.map(url => {
    return axios.request(options(url, param));
  });

  return axios.all(requests).then(
    axios.spread((...responses) => {
      const data = responses.map(response => {
        return response.data;
      });
      return data;
    })
  );
}
