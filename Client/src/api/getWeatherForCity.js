import authenticate from './authenticate';
import axios from 'axios';
import { API_ADDRESS, QUERY_TYPE } from '../constants';

const getWeatherForCity = async search => {
  const token = await authenticate();

  const AUTHENTICATION_HEADER = {
    Authorization: `Bearer ${token}`
  };
  return axios
    .get(`${API_ADDRESS}${QUERY_TYPE.GET_LATEST_DATA}${String(search)}`, {
      headers: AUTHENTICATION_HEADER
    })
    .then(result => result)
    .catch(err => console.log(err));
};

export default getWeatherForCity;
