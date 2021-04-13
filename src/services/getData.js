const baseURL = 'https://pfa.foreca.com/api/v1';
import axios from '../common/axiosInterceptors';

export default async function getData(url) {
  const { data } = await axios.get(`${baseURL}${url}`);
  return data;
}
