// @flow
import type { LocationType } from './LocationType';
import type { HourlyForecastType, DailyForecastType } from './ForecastType';

export type ChangeLocationActionType = {
  type: string,
  currentLocation: LocationType
};

export type ChangeSearctStringActionType = {
  type: string,
  searchString: string
};

export type HourlyForecastActionType = {
  type: string,
  currentHourlyForecast: HourlyForecastType
};

export type DailyForecastActionType = {
  type: string,
  currentDailyForecast: DailyForecastType
};

export type FavoriteLocationsActionType = {
  type: string,
  favoriteCitiesList: Array<LocationType>
};
