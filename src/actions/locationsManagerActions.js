// @flow

import type {
  ChangeLocationActionType,
  ChangeSearctStringActionType,
  HourlyForecastActionType,
  DailyForecastActionType
} from './types/locationActionsTypes';
import type { LocationForecastType } from '../types/LocationType';
import type { HourlyForecastType, DailyForecastType } from '../types/ForecastType';
import type {
  DispatchLocation,
  GetStoreState,
  ThunkActionLocation,
  DispatchHourlyForecast,
  ThunkActionHourlyForecast,
  DispatchDailyForecast,
  ThunkActionDailyForecast
} from '../types/ReduxTypes';
import type { LocationType } from '../types/LocationType';
import { CURRENT_LOCATION_STORAGE_CODE } from '../utils/constants';
import Storage from '../services/StorageConnectionService';
import Geolocation from '../services/GeolocationService';
import ApiService from '../services/ForecastApiService';

const PREFIX = 'LOCATION_MANAGER';

export const CHANGE_LOCATION = `${PREFIX}/CHANGE`;
export const CHANGE_SEARCH_STRING = `${PREFIX}/CHANGE_SEARCH_STRING`;
export const SET_HOURLY_FORECAST = `${PREFIX}/SET_HOURLY_FORECAST`;
export const SET_DAILY_FORECAST = `${PREFIX}/SET_DAILY_FORECAST`;

export const changeLocation = (location: LocationType): ChangeLocationActionType => ({
  type: CHANGE_LOCATION,
  currentLocation: location
});

export const changeSearchString = (searchString: string): ChangeSearctStringActionType => ({
  type: CHANGE_SEARCH_STRING,
  searchString
});

export const changeCurrentDailyForecast = (
  dailyForecast: DailyForecastType
): DailyForecastActionType => ({
  type: SET_DAILY_FORECAST,
  currentDailyForecast: dailyForecast
});

export const changeCurrentHourlyForecast = (
  hourlyForecast: HourlyForecastType
): HourlyForecastActionType => ({
  type: SET_HOURLY_FORECAST,
  currentHourlyForecast: hourlyForecast
});

export const setCurrentHourlyForecast =
  (locationId: number | string): ThunkActionHourlyForecast =>
  async (dispatch: DispatchHourlyForecast, getState: GetStoreState): Promise<void> => {
    try {
      const {
        locationManager: { currentDailyForecast }
      } = getState();

      if (locationId) {
        const { data } = await ApiService.getHourlyForecast(locationId);

        dispatch(changeCurrentHourlyForecast(data.forecast));
      }
    } catch (error) {
      console.error(error);
    }
  };

export const setCurrentDailyForecast =
  (locationId: number | string): ThunkActionDailyForecast =>
  async (dispatch: DispatchDailyForecast, getState: GetStoreState): Promise<void> => {
    try {
      const {
        locationManager: { currentDailyForecast }
      } = getState();

      if (locationId) {
        const { data } = await ApiService.getDailyForecast(locationId);

        dispatch(changeCurrentDailyForecast(data.forecast));
      }
    } catch (error) {
      console.error(error);
    }
  };

export const setCurrentLocation =
  (location: LocationType): ThunkActionLocation =>
  async (dispatch: DispatchLocation, getState: GetStoreState): Promise<void> => {
    Storage.setValue(CURRENT_LOCATION_STORAGE_CODE, location);

    dispatch(changeLocation(location));
  };

export const getCurrentGeolocation = (
  dispatch: DispatchLocation,
  getState: GetStoreState
): void => {
  Storage.setValue(CURRENT_LOCATION_STORAGE_CODE, {});
  dispatch(setGeolocationCity(true));
};

export const setGeolocationCity =
  (isRefreshCurrentLocation: boolean = false): ThunkActionLocation =>
  async (dispatch: DispatchLocation, getState: GetStoreState): Promise<void> => {
    const {
      locationManager: { currentLocation: storageLocation }
    } = getState();

    console.log(storageLocation);
    console.log(isRefreshCurrentLocation);
    if (!storageLocation.id || isRefreshCurrentLocation) {
      let currentLocationData = storageLocation;

      try {
        const position = await Geolocation.getCurrentPosition();
        const currentLocationApi = await ApiService.getLocationInfo(
          `${position.coords.longitude},${position.coords.latitude}`
        );
        currentLocationData = currentLocationApi.data;
      } catch (error) {
        console.error(error);
      }

      dispatch(changeLocation(currentLocationData));
    }
  };
