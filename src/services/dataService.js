import * as axios from 'axios';
import { API_AUTH_URL, API_BASE_URL } from '../constants/constants';

const instance = axios.create({
  withCredentials: true,
  baseURL: API_BASE_URL
});

export const weatherAPI = {
  getToken(user, password) {
    const body = { user: `${user}`, password: `${password}` };
    return instance.post(API_AUTH_URL, body, {
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  }
};
