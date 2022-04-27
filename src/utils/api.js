import axios from 'axios';
import { Cookie } from '../services/cookie';
import { TOKEN_URL, MAIN_URL } from '../config/constants';

export const publicApiInstance = axios.create({
  baseURL: MAIN_URL,
  headers: { authorization: `Bearer ${Cookie.getToken()}` }
});

export async function getAccessTokenFromAPI() {
  try {
    const response = await axios.get(TOKEN_URL);
    return response.data.tokens[0].access_token;
  } catch (error) {
    console.warn(error);
  }
}
