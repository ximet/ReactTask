import axios from 'axios';

const http = axios.create();

http.defaults.baseURL = process.env.BASE_URL;
http.defaults.headers = {
  'Access-Control-Allow-Origin': process.env.BASE_URL,
};

export default http;
