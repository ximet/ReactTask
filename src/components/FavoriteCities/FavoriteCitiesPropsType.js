// @flow
import type { LocationType, LocationForecastType } from '../../types/LocationType';

export type FavoriteLocationForecastType = {
  ...LocationType,
  forecast: LocationForecastType
};

export type FavoriteCitiesPropsType = {
  favoriteLocations: Array<FavoriteLocationForecastType>
};
