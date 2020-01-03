import axios from 'axios';
import { WEATHER_API_KEY } from 'const/index.js';
import Api from 'api/config';

const getCurrentCityWeather = (location) => Api.get(`/weather?q=${location}&appid=${WEATHER_API_KEY}&units=metric`);
const getSeveralCityByIDs = (ids) => Api.get(`/group?id=${ids}&units=metric`);
const getWeatherIcon = (iconName) => axios.get(`http://openweathermap.org/img/w/${iconName}.png`);

export const weatherService = {
  getCurrentCityWeather,
  getSeveralCityByIDs,
  getWeatherIcon,
};
