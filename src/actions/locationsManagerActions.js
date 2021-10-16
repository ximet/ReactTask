// @flow

import type {
  ChangeLocationActionType,
  ChangeSearctStringActionType
} from './types/locationActionsTypes';
import type { DispatchLocation, GetStoreState, ThunkActionLocation } from '../types/ReduxTypes';
import type { LocationType } from '../types/LocationType';
import { CURRENT_LOCATION_STORAGE_CODE } from '../utils/constants';
import Storage from '../services/StorageConnectionService';
import Geolocation from '../services/GeolocationService';
import ApiService from '../services/ForecastApiService';

const PREFIX = 'LOCATION_MANAGER';

export const CHANGE_LOCATION = `${PREFIX}/CHANGE`;
export const CHANGE_SEARCH_STRING = `${PREFIX}/CHANGE_SEARCH_STRING`;

export const changeLocation = (location: LocationType): ChangeLocationActionType => ({
  type: CHANGE_LOCATION,
  currentLocation: location
});

export const setCurrentLocation =
  (location: LocationType): ThunkActionLocation =>
  async (dispatch: DispatchLocation, getState: GetStoreState): Promise<void> => {
    Storage.setValue(CURRENT_LOCATION_STORAGE_CODE, location);
    dispatch(changeLocation(location));
  };

export const setGeolocationCity = async (
  dispatch: DispatchLocation,
  getState: GetStoreState
): Promise<void> => {
  const {
    locationManager: { currentLocation: storageLocation }
  } = getState();

  if (!storageLocation.id) {
    const position = await Geolocation.getCurrentPosition();
    const currentLocationApi = await ApiService.getLocationInfo(
      `${position.coords.longitude},${position.coords.latitude}`
    );
    const currentLocationData = currentLocationApi.data;

    dispatch(changeLocation(currentLocationData));
  }
};

export const changeSearchString = (searchString: string): ChangeSearctStringActionType => ({
  type: CHANGE_SEARCH_STRING,
  searchString
});
