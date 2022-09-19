import HTTPRequest from './httpService';

export const getWeather = async <T>(
  endpoint: string,
  longitude: number,
  latitude: number,
  params?: object
): Promise<T> => {
  const current = await HTTPRequest(`/api/v1${endpoint}${longitude},${latitude}`, {}, params);
  return current;
};