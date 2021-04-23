import { BASE_URL } from '../common/constants';
import axios from '../common/axiosInterceptors';

export default async function getData(url) {
  const { data } = await axios.get(`${BASE_URL}${url}`);
  return data;
}
