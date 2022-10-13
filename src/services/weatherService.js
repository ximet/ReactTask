import { baseUrl } from '../components/constants';
import { TOKEN_KEY } from '../components/constants';
import { BAERER } from '../components/constants';
import { API_END_POINTS } from '../components/constants';

const myToken = localStorage.getItem(TOKEN_KEY);
const accessToken = `${BAERER} ${myToken}`;

export const getCities = async value => {
  const endpoint = API_END_POINTS.searchedCities;

  const response = await fetch(`${baseUrl}${endpoint}${value}`, {
    method: 'GET',
    headers: {
      Authorization: accessToken
    }
  });
  const cities = await response.json();
  return cities;
};

export const getForecastById = async id => {
  const endpoint = API_END_POINTS.cityForecast;

  const response = await fetch(`${baseUrl}${endpoint}${id}`, {
    method: 'GET',
    headers: {
      Authorization: accessToken
    }
  });
  const data = await response.json();
  return data;
};

export const getCityDetails = async id => {
  const endpoint = API_END_POINTS.cityDetails;

  const response = await fetch(`${baseUrl}${endpoint}${id}`, {
    method: 'GET',
    headers: {
      Authorization: accessToken
    }
  });
  const dataDetails = await response.json();
  return dataDetails;
};
