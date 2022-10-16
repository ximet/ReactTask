import { TOKEN } from '../services/constants.js';

const getCities = async (value) => {
  const response = await fetch(`https://pfa.foreca.com/api/v1/location/search/${value}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem(TOKEN)}`
    }
  });
  return await response.json();
};

const getCityInfo = async (city) => {
  const response = await fetch(`https://pfa.foreca.com/api/v1/location/${city}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem(TOKEN)}`
    }
  });
  return await response.json();
};

const getCityForecast = async (city) => {
  const response = await fetch(`https://pfa.foreca.com/api/v1/observation/latest/${city}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem(TOKEN)}`
    }
  });
  return await response.json();
}

export { getCities, getCityInfo, getCityForecast };
