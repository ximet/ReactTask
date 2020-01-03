import axios from 'axios';

export const ENDPOINT = 'http://api.openweathermap.org/data/2.5';

const api = axios.create({
  baseURL: ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
