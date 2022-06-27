import axios from 'axios';
import { COOKIE } from '../DataService/cookieService';

export async function requestToken() {
  try {
    const res = await axios.get('http://localhost:3000/token');
    return res.data.access_token;
  } catch (error) {
    console.error(error);
  }
}

export const instance = axios.create({
  baseURL: 'https://pfa.foreca.com/api/v1',
  headers: {
    Authorization: `Bearer ${COOKIE.loadToken()}`
  },
  transformResponse: (res) => JSON.parse(res)
});
