import HTTPRequest from './httpService';

export const getWeather = async <T>(
  endpoint: string,
  longitude: number,
  latitude: number,
  params?: string
): Promise<T> => {
  const current = await HTTPRequest(`${endpoint}${longitude},${latitude}${params || ''}`, {});
  return current;
};
