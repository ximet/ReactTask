import { LocationInfoType } from 'types/cityInfoType';
import { getFavoriteCities } from 'services/localStorage';
import { DailyWeatherType, HourlyWeatherType } from 'types/weatherTypes';

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

export const getGraphDates = (weatherData: DailyWeatherType | HourlyWeatherType): string => {
  if (isDailyWeather(weatherData)) {
    return `${convertTime(weatherData.date).date}-${convertTime(weatherData.date).month}`;
  } else {
    return `${convertTime(weatherData.time).hours}-${convertTime(weatherData.time).minutes}`;
  }
};

function isDailyWeather(
  weatherData: DailyWeatherType | HourlyWeatherType
): weatherData is DailyWeatherType {
  return 'date' in weatherData;
}

export const getArray = (n: number): number[] => {
  return Array.from({ length: n }, (_, i) => i + 1);
};
