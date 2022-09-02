import HTTPRequest from './httpService';
import { LocationInfoType } from 'types/cityInfoType';

export const getCity = async (longitude: number, latitude: number): Promise<LocationInfoType> => {
  const {
    id,
    name: city,
    country,
    lon,
    lat,
    timezone,
    language,
    adminArea,
    adminArea2,
    adminArea3
  } = await HTTPRequest(`/api/v1/location/${longitude},${latitude}`, {});
  return {
    id,
    city,
    country,
    timezone,
    language,
    adminArea,
    adminArea2,
    adminArea3,
    lon,
    lat
  };
};
