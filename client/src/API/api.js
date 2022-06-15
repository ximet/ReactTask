import axios from 'axios';
import { Cookie } from '../Utils/CookieHandler';
import { MAIN_URL, TOKEN_URL } from '../Utils/constants';

export const weatherAPI = axios.create({
  baseURL: MAIN_URL,
  headers: { authorization: `Bearer ${Cookie.getToken()}` }
});

export async function getTokenFromAPI() {
  try {
    const response = await axios.get(TOKEN_URL);
    return response.data.access_token;
  } catch (error) {
    console.warn(error);
  }
}

export const getCurrentWeatherInfo = async () => {
  const { data: weatherData } = await weatherAPI.get(
    `current/location=${coords.longitude},${coords.latitude}`
  );
  console.log(weatherData);
};
