import axios from 'axios';
import config from '../config/config';

export const WeatherService = () => ({
  getWeather: (lat, lon) => axios.get(`${config.weatherApiUrl}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${config.weatherApiKey}`),
  getGroupWeather: () => axios.get(`${config.weatherApiUrl}/group?id=524901,703448,2643743&units=metric&appid=${config.weatherApiKey}`),
});
