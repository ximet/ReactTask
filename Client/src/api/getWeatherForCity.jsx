import apiAuthenctication from './apiAuthentication';
import axios from 'axios';
import { LOCAL_SERVER, API_ADDRESS, QUERY_TYPE } from '../constants';

const getWeatherForCity = async search => {
  const token = await apiAuthenctication();

  const AUTH = {
    Authorization: `Bearer ${token}`
  };
  console.log('search from search: ', search);
  return axios
    .get(`${API_ADDRESS}${QUERY_TYPE.GET_LATEST_DATA}${String(search)}`, {
      headers: AUTH
    })
    .then(result => result)
    .catch(err => console.log(err));
};

export default getWeatherForCity;

