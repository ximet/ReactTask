import HTTPRequest from './httpService';
import { Coordinates } from 'types/positionType';
export const getWeather = async <T>(
  endpoint: string,
  position: Coordinates,
  params?: object
): Promise<T> => {
  const { longitude, latitude } = position;
  const current = await HTTPRequest(`/api/v1${endpoint}${longitude},${latitude}`, {}, params);
  return current;
};
