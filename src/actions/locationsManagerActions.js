// @flow

import type {
  ChangeLocationActionType,
  ChangeSearctStringActionType,
  HourlyForecastActionType,
  DailyForecastActionType,
  CachedForecastsActionType,
  WarningsActionType
} from '../types/ActionsTypes';
import type { LocationForecastType } from '../types/LocationType';
import type { WarningsType } from '../types/WarningsType';
import type {
  HourlyForecastType,
  DailyForecastType,
  CachedForecastCurrentType
} from '../types/ForecastType';
import type {
  DispatchLocation,
  GetStoreState,
  ThunkActionLocation,
  DispatchHourlyForecast,
  ThunkActionHourlyForecast,
  DispatchDailyForecast,
  ThunkActionDailyForecast,
  DispatchCachedForecasts,
  ThunkActionCachedForecasts,
  DispatchWarnings,
  ThunkActionWarnings
} from '../types/ReduxTypes';
import type { LocationType } from '../types/LocationType';
import { CURRENT_LOCATION_STORAGE_CODE } from '../utils/constants';
import { getCurrentTime } from '../utils/dateTimeUtils';
import Storage from '../services/StorageConnectionService';
import Geolocation from '../services/GeolocationService';
import ApiService from '../services/ForecastApiService';
import RequestController from '../controllers/RequestController';

const PREFIX = 'LOCATION_MANAGER';

export const CHANGE_LOCATION = `${PREFIX}/CHANGE`;
export const CHANGE_SEARCH_STRING = `${PREFIX}/CHANGE_SEARCH_STRING`;
export const SET_HOURLY_FORECAST = `${PREFIX}/SET_HOURLY_FORECAST`;
export const SET_DAILY_FORECAST = `${PREFIX}/SET_DAILY_FORECAST`;
export const SET_FORECAST = `${PREFIX}/SET_FORECAST`;
export const SET_WARNINGS = `${PREFIX}/SET_WARNINGS`;

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

export const changeForecasts = (
  forecast: CachedForecastCurrentType,
  locationId: string
): CachedForecastsActionType => ({
  type: SET_FORECAST,
  forecast: forecast,
  locationId: locationId
});

export const getForecast =
  (locationId: string): ThunkActionCachedForecasts =>
  async (dispatch: DispatchCachedForecasts, getState: GetStoreState): Promise<void> => {
    try {
      const { data } = await ApiService.getCurrentForecast(locationId);
      const locationForecast = {
        cacheTimeStamp: getCurrentTime(),
        forecast: data.current
      };

      dispatch(changeForecasts(locationForecast, locationId));
    } catch (error) {
      console.error(error);
    }
  };

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

export const setGeolocationCity = async (
  dispatch: DispatchLocation,
  getState: GetStoreState
): Promise<void> => {
  const {
    locationManager: { currentLocation: storageLocation }
  } = getState();

  if (!storageLocation.id) {
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

export const changeWarnings = (warnings: WarningsType): WarningsActionType => ({
  type: CHANGE_LOCATION,
  warnings: warnings
});

export const setWarnings =
  (locationId: number | string): ThunkActionWarnings =>
  async (dispatch: DispatchWarnings, getState: GetStoreState): Promise<void> => {
    try {
      const warnings = await RequestController.getWarnings(locationId);
      dispatch(changeWarnings(warnings));
    } catch (error) {
      console.error(error);
    }
  };
