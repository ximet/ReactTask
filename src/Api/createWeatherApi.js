import { TOKEN, MAIN_URL } from '../Services/constants';
const axios = require('axios').default;

export default axios.create({
  baseURL: MAIN_URL,
  headers: {
    authorization: `Bearer ${TOKEN}`
  }
});
