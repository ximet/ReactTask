import { LOCATION_URL } from '../common/constants';
import getData from './getData';

export default async function getCitiesData(query) {
  try {
    const { locations } = await getData(`${LOCATION_URL}${query}`);
    return locations;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
