import axios from 'axios';
import { GeolocationCoordinates, LocationData } from 'types';

const URL = 'http://localhost:5000';

export const createToken = async () => {
  try {
    const result = await axios.post(`http://localhost:5000/authorize/token?expire_hours=2`);
    window.localStorage.setItem('token', result.data.access_token);
    return result.data;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export const getCurrentWeather = async (param: GeolocationCoordinates | null) => {
  try {
    const result = await axios.get(`${URL}/current/location=${param?.lon},${param?.lat}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return result.data.current;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getLocation = async (
  param: GeolocationCoordinates | null
): Promise<LocationData | undefined> => {
  try {
    const result = await axios.get(`${URL}/location/${param?.lon},${param?.lat}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return result.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getLocationByQuery = async (param: string | undefined) => {
  try {
    const result = await axios.get(`${URL}/location/search/${param}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return result.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getDailyWeather = async (param: GeolocationCoordinates | null) => {
  try {
    const result = await axios.get(
      `${URL}/forecast/daily/location=${param?.lon},${param?.lat}&dataset=full`,
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

export const getHourlyWeather = async (param: GeolocationCoordinates | null) => {
  try {
    const result = await axios.get(
      `${URL}/forecast/hourly/location=${param?.lon},${param?.lat}&periods=168&dataset=full`,
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
