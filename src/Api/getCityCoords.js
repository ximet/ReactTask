const axios = require('axios');
import { backendURL } from '../Config/constants';

const getCityCoords = async query => {
  const options = {
    method: 'GET',
    url: backendURL + '/get-city-coords',
    params: { query: query }
  };

  return await axios.request(options).then(response => response.data);
};

export default getCityCoords;
