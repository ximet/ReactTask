import axios from '../common/axios-config';
import { BASE_URL } from '../common/constants';

const Api = http => ({
  get: url => http.get(`${BASE_URL}${url}`)
});

export default Api(axios);
