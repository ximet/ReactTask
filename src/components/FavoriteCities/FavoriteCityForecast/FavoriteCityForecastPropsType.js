// @flow
import type { LocationType } from '../../../types/LocationType';
import type { CachedForecastCurrentType } from '../../../types/ForecastType';

export type FavoriteCityForecastOwnPropsType = {
  location: LocationType
};

type IsLoadingStates = {
  [locationId: string | number]: boolean
};

export type FavoriteCityForecastPropsType = {
  ...FavoriteCityForecastOwnPropsType,
  forecasts: CachedForecastCurrentType,
  isLoadingStates: IsLoadingStates,
  getForecast: (locationId: number) => void,
  setFavoriteCities: (location: LocationType, isFavorite: boolean) => void
};
