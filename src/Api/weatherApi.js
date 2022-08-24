import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pfa.foreca.com/api/v1/',
  timeout: 3000,
  headers: { Authorization: `Bearer ${process.env.TOKEN}` }
});

export const getCurrentWeather = async (longitude, latitude) => {
  const result = await instance.get(`/current/${longitude},${latitude}`);
  return result.data;
};

export const getLocationByCoords = async (longitude, latitude) => {
  const result = await instance.get(`/location/${longitude},${latitude}`);
  return {
    city: result.data.name,
    country: result.data.country
  };
};
