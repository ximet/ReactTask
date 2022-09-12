import { LocationInfoType } from 'types/cityInfoType';

export const FAVORITE_CITIES_LS_LABEL = 'favorite-cities';

export function setInLocalStorage(data: string | {}[], key: string): void {
  const json = JSON.stringify(data);
  localStorage.setItem(key, json);
}

export function getFromLocalStorage(key: string): string {
  const json = localStorage.getItem(key);
  let data = '';

  if (json) {
    data = JSON.parse(json);
  }
  return data;
}

export const getFavoriteCities = (): LocationInfoType[] => {
  const favoriteCities: LocationInfoType[] = (getFromLocalStorage(FAVORITE_CITIES_LS_LABEL) ||
    []) as LocationInfoType[];
  return favoriteCities || [];
};
