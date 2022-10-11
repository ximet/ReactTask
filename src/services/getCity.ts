import HTTPRequest from './httpService';
import { LocationInfoType } from 'types/cityInfoType';

export const getCity = async (
  longitude: number | string,
  latitude: number | string
): Promise<LocationInfoType> => {
  const city = await HTTPRequest(`/api/v1/location/${longitude},${latitude}`, {});
  return city;
};

export const getCitiesSearchResults = async (
  search: string
): Promise<{ locations: LocationInfoType[] }> => {
  const result = await HTTPRequest(`/api/v1/location/search/${search}`, {});
  return result;
};
