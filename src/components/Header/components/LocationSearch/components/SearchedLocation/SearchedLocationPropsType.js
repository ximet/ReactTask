// @flow
import type { LocationType } from '../../../../../../types/LocationType';

export type SearchedLocationOwnPropsType = {|
  location: LocationType
|};

export type SearchedLocationDispatchType = {|
  setCurrentLocation: (location: LocationType) => void,
  setFavoriteCities: (location: LocationType, isFavorite: boolean) => void
|};

export type SearchedLocationPropsType = {|
  ...SearchedLocationOwnPropsType,
  favoriteCitiesIdList: Array<number | string>,
  ...SearchedLocationDispatchType
|};
