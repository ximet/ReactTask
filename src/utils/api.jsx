import axios from 'axios';
import { Cookie } from '../services/cookie';
import { TOKEN_URL, MAIN_URL } from '../config/constants';

const token = Cookie.getToken();

if (token === undefined) {
  getAccessTokenFromAPI();
}

export const publicApiInstance = axios.create({
  baseURL: MAIN_URL,
  headers: { authorization: `Bearer ${token}` }
});

async function getAccessTokenFromAPI() {
  const response = await axios.get(TOKEN_URL);
  Cookie.setToken(response.data.tokens[0].access_token);
}
