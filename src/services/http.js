import axios from 'axios';

const http = axios.create();

http.defaults.baseURL = process.env.BASE_URL;
http.defaults.headers = {
  // TODO: change to correct
  'Access-Control-Allow-Origin': '*',
};

export default http;
