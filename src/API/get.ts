import axios from 'axios';
import { Coordinates, DailyWeather, LocationData, WeatherData } from 'types';

const url = process.env.MAIN_URL;

export const createToken = async () => {
  try {
    const result = await axios.post(`http://localhost:5000/authorize/token?expire_hours=2`);
    window.localStorage.setItem('token', result.data.access_token);
    return result.data;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export const getCurrentWeather = async (param: Coordinates) => {
  try {
    const result = await axios.get(`${url}/current/location=${param.lon},${param.lat}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return result.data.current;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getLocation = async (param: Coordinates): Promise<LocationData | null> => {
  try {
    const result = await axios.get(`${url}/location/${param.lon},${param.lat}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return result.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getDailyWeather = async (param: Coordinates) => {
  try {
    const result = await axios.get(
      `${url}/forecast/daily/location=${param.lon},${param.lat}&dataset=full`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    return result.data.forecast;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
