import getData from './getData';
import { CURRENT_URL } from '../common/constants';

export default async function getCurrentCityData(id) {
  try {
    const { current } = await getData(`${CURRENT_URL}/${id}`);
    return current;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
