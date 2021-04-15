import axios from 'axios';
import { authURL } from './constants';

export async function getToken() {
  try {
    const res = await axios.get(authURL);
    const token = await res.data.access_token;
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    console.log(error);
  }
}
