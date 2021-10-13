// @flow

export type LocationType = {
  id: number,
  name: string,
  country: string,
  state: string,
  timezone: string,
  adminArea: string,
  lon: number,
  lat: number
};

export type LocationsType = Array<LocationType>;

export type LocationsResponseType = {
  status: boolean,
  locations: LocationsType
};

export type SearchedLocationsType = {
  locations: Array<LocationType>
};
