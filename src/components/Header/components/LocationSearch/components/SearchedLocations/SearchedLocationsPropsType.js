// @flow
import type { LocationType } from '../../../../../../types/LocationType';

export type SearchedLocationsOwnPropsType = {
  locations: Array<LocationType>
};

export type SearchedLocationsPropsType = {
  ...SearchedLocationsOwnPropsType
};
