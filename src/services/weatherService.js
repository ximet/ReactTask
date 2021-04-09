import axios from '../common/axios-config';
import { BASE_URL } from '../common/constants';

export const getLocationData = async location => {
  try {
    const {
      data: { locations }
    } = await axios.get(`${BASE_URL}/location/search/${location}`);
    return [...locations].sort(
      (a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name)
    );
  } catch (error) {
    // to be handled accordingly elsewhere
    throw error;
  }
};

export const getCurrentWeatherData = async cityId => {
  try {
    const { data } = await axios.get(`${BASE_URL}/current/${cityId}`);
    return data;
  } catch (error) {
    throw error;
  }
};
