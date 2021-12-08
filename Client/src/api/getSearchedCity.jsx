import authenticate from './authenticate';
import axios from 'axios';
import { LOCAL_SERVER, API_ADDRESS, QUERY_TYPE } from '../constants';

const getSearchedCity = async search => {
  const token = await authenticate();

  const AUTH = {
    Authorization: `Bearer ${token}`
  };
  return axios
    .get(`${API_ADDRESS}${QUERY_TYPE.GET_SEARCH}${String(search)}`, {
      headers: AUTH
    })
    .then(result => result)
    .catch(err => console.log(err));
};

export default getSearchedCity;
