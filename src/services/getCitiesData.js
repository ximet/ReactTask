import { locationURL } from '../common/constants';
import getData from './getData';

export default async function getCitiesData(inputValue) {
  try {
    const { locations } = await getData(`${locationURL}${inputValue}`);
    return locations.map(city => ({
      name: `${city.name.toLowerCase()}`,
      country: `${city.country.toLowerCase()}`,
      id: city.id
    }));
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
