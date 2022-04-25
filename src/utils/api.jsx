import axios from 'axios';
import { token } from '../config/constants';

export const publicApiInstance = axios.create({
  baseURL: 'https://pfa.foreca.com/api/v1',
  headers: { authorization: `Bearer ${token}` }
});
