import HTTPRequest from './httpService';
import { LocationInfoType } from 'types/cityInfoType';
import { Coordinates } from 'types/positionType';

export const getCity = async (position: Coordinates): Promise<LocationInfoType> => {
  const { longitude, latitude } = position;
  const city = await HTTPRequest(`/api/v1/location/${longitude},${latitude}`, {});
  return city;
};

export const getCitiesSearchResults = async (
  search: string
): Promise<{ locations: LocationInfoType[] }> => {
  const result = await HTTPRequest(`/api/v1/location/search/${search}`, {});
  return result;
};
