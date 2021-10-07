import axios from 'axios';

const proxyServer = axios.create({
  baseURL: process.env.PROXY_SERVER_URL
});

const weatherApi = axios.create({
  baseURL: process.env.WEATHER_API_URL
});

export { proxyServer, weatherApi };
