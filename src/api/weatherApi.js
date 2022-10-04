import { token } from '../customHooks/useAuthorize.js';

const getCities = async value => {
   const response = await fetch(`https://pfa.foreca.com/api/v1/location/search/${value}`, {
     method: 'GET',
     headers: {
       Authorization: `Bearer ${localStorage.getItem(token)}`
     }
   });
   return await response.json();
 };

export { getCities };
