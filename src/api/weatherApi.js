import { TOKEN } from '../services/constants.js';

const getCities = async value => {
  const response = await fetch(`https://pfa.foreca.com/api/v1/location/search/${value}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem(TOKEN)}`
    }
  });
  return await response.json();
};

export { getCities };
