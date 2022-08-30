import axios from 'axios';
import { Coordinates, LocationData, WeatherData } from 'types';

const MAIN_URL = 'https://pfa.foreca.com/api/v1';

export const auth = axios.create({
  baseURL: MAIN_URL,
  headers: { Authorization: `Bearer ${process.env.TOKEN}` }
});

export const getCurrentWeather = async (param: Coordinates): Promise<WeatherData | null> => {
  try {
    const result = await auth.get(`/current/location=${param.lon},${param.lat}`);
    return result.data.current;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getLocation = async (param: Coordinates): Promise<LocationData | null> => {
  try {
    const result = await auth.get(`/location/${param.lon},${param.lat}`);
    return result.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
