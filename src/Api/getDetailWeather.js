const axios = require('axios');
import { backendURL } from '../Config/constants';

const getDetailWeather = async coords => {
  const options = {
    method: 'GET',
    url: backendURL + '/get-detail-weather',
    params: coords
  };
  
  return await axios.request(options).then(response => response.data);
};

export default getDetailWeather;
