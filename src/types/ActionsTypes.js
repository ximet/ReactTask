// @flow
import type { LocationType } from './LocationType';
import type {
  HourlyForecastType,
  DailyForecastType,
  CachedForecastCurrentType
} from './ForecastType';
import type { WarningsType } from './WarningsType';

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

export type CachedForecastsActionType = {
  type: string,
  forecast: CachedForecastCurrentType,
  locationId: string
};

export type WarningsActionType = {
  type: string,
  warnings: WarningsType
};

export type FavoriteLocationsActionType = {
  type: string,
  favoriteCitiesList: Array<LocationType>
};