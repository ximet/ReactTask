// @flow

import type {
  ChangeLocationActionType,
  ChangeSearctStringActionType
} from './types/locationActionsTypes';

const PREFIX = 'LOCATION_MANAGER';

export const CHANGE_LOCATION = `${PREFIX}/CHANGE`;
export const CHANGE_SEARCH_STRING = `${PREFIX}/CHANGE_SEARCH_STRING`;

export const changeLocation = (locationName: string): ChangeLocationActionType => ({
  type: CHANGE_LOCATION,
  currentLocation: locationName
});

export const changeSearchString = (searchString: string): ChangeSearctStringActionType => ({
  type: CHANGE_SEARCH_STRING,
  searchString
});
