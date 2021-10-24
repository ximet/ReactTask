// @flow
import type { LocationType } from '../../../../types/LocationType';

export type LocationSearchOwnPropsType = {
  currentLocation: LocationType
};

export type LocationSearchDispatchType = {
  getCurrentGeolocation: () => void
};

export type LocationSearchStatesType = {
  isOpenDropDown: boolean
};

export type LocationSearchPropsType = {
  ...LocationSearchPropsType,
  ...LocationSearchDispatchType
};
