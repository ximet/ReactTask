// @flow
import type { LocationType } from '../../../types/LocationType';

export type FavoriteCityForecastOwnPropsType = {
  location: LocationType
};

export type FavoriteCityForecastDispatchType = {|
  setFavoriteCities: (location: LocationType, isFavorite: boolean) => void
|};

export type FavoriteCityForecastPropsType = {
  ...FavoriteCityForecastOwnPropsType,
  ...FavoriteCityForecastDispatchType
};
