// @flow
import type { LocationType } from '../../../../../../types/LocationType';

export type SearchedLocationOwnPropsType = {|
  location: LocationType
|};

export type SearchedLocationDispatchType = {|
  onChangeLocation: (location: LocationType) => void
|};

export type SearchedLocationPropsType = {|
  ...SearchedLocationOwnPropsType,
  ...SearchedLocationDispatchType
|};
