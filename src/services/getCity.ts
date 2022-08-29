import HTTPRequest from './httpService';

type Response = {
  id: number;
  city: string;
  country: string;
  lon: number;
  lat: number;
};

export const getCity = async (longitude: number, latitude: number): Promise<Response> => {
  const { id, name: city, country, lon, lat } = await HTTPRequest(
    `/location/${longitude},${latitude}`,
    {}
  );
  return {
    id,
    city,
    country,
    lon,
    lat
  };
};
