import axios from 'axios';
import { AUTH_URL } from './constants';

export async function getToken() {
  try {
    const res = await axios.get(AUTH_URL);
    const token = await res.data.access_token;
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    console.log(error);
  }
}
