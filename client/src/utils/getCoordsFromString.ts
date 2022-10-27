import { GeolocationCoordinates } from 'types';
import { separateCapitalizeName } from './stringCorrections';

export const getCoordsFromString = (string: string): GeolocationCoordinates => {
  const lon = string.split('(')[1].split(')')[0];
  const lat = string.split('(')[2].split(')')[0];
  const searchLocationCoords = {
    lat: Number(lat),
    lon: Number(lon)
  };
  return searchLocationCoords;
};
export const getLocationName = savedSearch => {
  return savedSearch && `${separateCapitalizeName(savedSearch.split('(')[0].split('-')[0])}`;
};
export const getLocationCountry = savedSearch => {
  return savedSearch && `${separateCapitalizeName(savedSearch.split('(')[0].split('-')[1])}`;
};
