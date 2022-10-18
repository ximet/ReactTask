import { TOKEN } from '../services/constants.js';

const apiGet = async url => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem(TOKEN)}`
    }
  });
  return await response.json();
};

export { apiGet };
