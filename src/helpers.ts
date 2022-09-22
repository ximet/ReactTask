import { LocationInfoType } from 'types/cityInfoType';
import { getFavoriteCities } from 'services/localStorage';

export const convertTime = (timeData: string) => {
  const date = new Date(timeData);

  return {
    date: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
    month: date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
    year: date.getFullYear(),
    hours: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
    minutes: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  };
};

export const getImgURL = (symbol: string): string =>
  `https://developer.foreca.com/static/images/symbols/${symbol}.png`;

export const getSortedByCountries = (): LocationInfoType[] =>
  getFavoriteCities().sort((a, b) => (a.country > b.country ? 1 : -1));
