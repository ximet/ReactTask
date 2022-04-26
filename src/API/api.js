import axios from 'axios';

import token from '../configs/token';

const weatherAPI = axios.create({
  baseURL: 'https://pfa.foreca.com/api/v1/',
  headers: { authorization: `Bearer ${token}` }
});

const lon = '23.9036';
const lat = '54.8985';

export const getCurrentWeatherInfo = async () => {
  const { data: weatherData } = await weatherAPI.get(`current/location=${lon},${lat}`);
  console.log(weatherData);
};

export const getHourlyWeatherInfo = async () => {
  const { data: weatherData } = await weatherAPI.get(`forecast/hourly/location=${lon},${lat}`);
  console.log(weatherData);
};

export const getDailyWeatherInfo = async () => {
  const { data: weatherData } = await weatherAPI.get(`forecast/daily/location=${lon},${lat}`);
  console.log(weatherData);
};
