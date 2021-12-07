import apiAuthenctication from './apiAuthentication';
import axios from 'axios';

const getSearchedCity = async search => {
  const token = await apiAuthenctication();

  const AUTH = {
    Authorization: `Bearer ${token}`
  };
  console.log('search from search: ',search)
  return axios
    .get(`https://pfa.foreca.com/api/v1/location/search/${String(search)}`, {
      headers: AUTH
    })
    .then(result => result)
    .catch(err => console.log(err));
};

export default getSearchedCity;
