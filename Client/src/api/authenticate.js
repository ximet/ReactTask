import { SERVER_URL } from '../constants';
import axios from 'axios';

const authenticate = () => {
  return axios
    .get(SERVER_URL)
    .then(result => result.data)
    .catch(err => console.log(err));
};

export default authenticate;
