// @flow
import type { LocationType, LocationsType, LocationForecastType } from '../../types/LocationType';

export type FavoriteLocationForecastType = {
  ...LocationType,
  forecast: LocationForecastType
};

export type FavoriteCitiesPropsType = {
  favoriteCitiesList: LocationsType
};
