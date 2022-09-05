import HTTPRequest from './httpService';
import { LocationInfoType } from 'types/cityInfoType';

export const getCity = async (longitude: number, latitude: number): Promise<LocationInfoType> => {
  const city = await HTTPRequest(`/api/v1/location/${longitude},${latitude}`, {});
  return city;
};
