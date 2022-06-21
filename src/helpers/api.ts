import axios from 'axios';

export const URL = {
  auth: 'http://localhost:3000/auth',
  locationSearch: 'https://pfa.foreca.com/api/v1/location/search/',
  locationInfo: 'https://pfa.foreca.com/api/v1/location/',
  observations: 'https://pfa.foreca.com/api/v1/observation/latest/',
  current: 'https://pfa.foreca.com/api/v1/current/',
  nowCast: 'https://pfa.foreca.com/api/v1/forecast/15minutely/',
  hourly: 'https://pfa.foreca.com/api/v1/forecast/hourly/',
  threeHourly: 'https://pfa.foreca.com/api/v1/forecast/3hourly/',
  daily: 'https://pfa.foreca.com/api/v1/forecast/daily/',
  airQuality: 'https://pfa.foreca.com/api/v1/air-quality/forecast/hourly/'
};

export async function getData(url: string, param: string) {
  const accessToken = document.cookie.slice(6);
  const options = {
    url: url + param,
    withCredentials: false,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };
  return axios.request(options).then(response => {
    return response.data;
  });
}

export function getMultipleData(urls: string[], param: string) {
  const accessToken = document.cookie.slice(6);
  
  const requests = urls.map(url => {
    const options = {
      url: url + param,
      withCredentials: false,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    };
    return axios.request(options);
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
