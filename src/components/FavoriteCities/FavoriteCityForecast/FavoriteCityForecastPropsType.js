// @flow
import type { LocationType } from '../../../types/LocationType';
import type { CachedForecastCurrentType } from '../../../types/ForecastType';

export type FavoriteCityForecastOwnPropsType = {
  location: LocationType
};

export type FavoriteCityForecastPropsType = {
  ...FavoriteCityForecastOwnPropsType,
  forecasts: CachedForecastCurrentType,
  checkCachedForecast: (locationId: number) => void
};
