import HTTPRequest from './httpService';

export const getWeather = async <T>(
  endpoint: string,
  longitude: number,
  latitude: number
): Promise<T> => {
  const current = await HTTPRequest(`${endpoint}${longitude},${latitude}`, {});
  return current;
};
