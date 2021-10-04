import { endpoints } from 'configs';
import http from '../http';

export const login = ({ data }) =>
  http({
    method: 'post',
    url: endpoints.authorizeToken,
    data,
    baseURL: process.env.FORECA_AUTH_URL,
  });
