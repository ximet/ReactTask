const axios = require('axios');
import { backendURL } from '../Config/constants';

const getCity = async coords => {
  const options = {
    method: 'GET',
    url: backendURL + '/get-city',
    params: coords
  };

  return await axios.request(options).then(response => response.data);
};

export default getCity;
