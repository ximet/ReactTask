// @flow
import type { LocationType } from '../../types/LocationType';

export type ChangeLocationActionType = {
  type: string,
  currentLocation: LocationType
};

export type ChangeSearctStringActionType = {
  type: string,
  searchString: string
};
