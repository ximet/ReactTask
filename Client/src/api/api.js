import axios from 'axios';
import { API_ADDRESS, QUERY_TYPE } from '../constants';
import authenticate from './authenticate';

async function getLocalData(pos) {
  const token = await authenticate();
  const AUTHENTICATION_HEADER = {
    Authorization: `Bearer ${token}`
  };

  let geolocatedCity = await axios
    .get(`${API_ADDRESS + QUERY_TYPE.GET_LOCATION}${pos.long},${pos.lat}`, {
      headers: AUTHENTICATION_HEADER
    })
    .then(result => {
      return result.data.id;
    });

  const finalResult = await axios
    .get(`${API_ADDRESS + QUERY_TYPE.GET_LATEST_DATA + geolocatedCity}`, {
      headers: AUTHENTICATION_HEADER
    })
    .then(result => {
      return result;
    });

  return finalResult;
}

export default getLocalData;
