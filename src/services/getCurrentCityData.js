import getData from './getData';
import { currentURL } from '../common/constants';

export default async function getCurrentCityData(id) {
  try {
    const { current } = await getData(`${currentURL}/${id}`);
    return current;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
