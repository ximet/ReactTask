import { baseURL } from '../common/constants';
import axios from '../common/axiosInterceptors';

export default async function getData(url) {
  const { data } = await axios.get(`${baseURL}${url}`);
  return data;
}
