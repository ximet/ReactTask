const axios = require('axios');
import { backendURL } from '../Config/constants';

const getCurrentWeather = async coords => {
  const options = {
    method: 'GET',
    url: backendURL + '/get-current-weather',
    params: coords
  };

  return await axios.request(options).then(response => response.data);
};

export default getCurrentWeather;
