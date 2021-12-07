import { LOCAL_SERVER, API_ADDRESS, QUERY_TYPE } from './constants';
import axios from 'axios';

const apiAuthenctication = () => {
  return axios.get(LOCAL_SERVER).then(result => result.data);
};

export default apiAuthenctication;
