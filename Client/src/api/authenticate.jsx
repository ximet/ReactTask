import { SERVER_URL } from '../constants';
import axios from 'axios';

const authenticate = () => {
  return axios.get(SERVER_URL).then(result => result.data);
};

export default authenticate;
