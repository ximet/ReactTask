import { baseUrl } from '../components/constants';
import { myToken } from '../components/constants';

const token = `Bearer ${myToken}`;

export const getCities = async value => {
  const response = await fetch(`${baseUrl}/location/search/${value}`, {
    method: 'GET',
    headers: {
      Authorization: token
    }
  });
  const cities = await response.json();
  return cities;
};
