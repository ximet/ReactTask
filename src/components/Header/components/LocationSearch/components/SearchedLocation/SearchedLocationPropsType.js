// @flow
import type { LocationType } from '../../../../../../types/LocationType';

export type SearchedLocationOwnPropsType = {|
  location: LocationType
|};

export type SearchedLocationDispatchType = {|
  onChangeLocation: (location: string) => void
|};

export type SearchedLocationPropsType = {|
  ...SearchedLocationOwnPropsType,
  ...SearchedLocationDispatchType
|};
