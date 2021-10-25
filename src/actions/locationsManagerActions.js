// @flow
import type {
  ChangeLocationActionType,
  ChangeSearctStringActionType,
  HourlyForecastActionType,
  DailyForecastActionType,
  CachedForecastsActionType,
  WarningsActionType,
  FavoriteLocationsActionType
} from '../types/ActionsTypes';
import type { WarningsType } from '../types/WarningsType';
import type {
  HourlyForecastType,
  DailyForecastType,
  CachedForecastCurrentType
} from '../types/ForecastType';
import type { LocationForecastType, LocationType, LocationsType } from '../types/LocationType';
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
  ThunkActionWarnings,
  DispatchFavorite,
  ThunkActionFavorite
} from '../types/ReduxTypes';
import { getCurrentTime } from '../utils/dateTimeUtils';
import { CURRENT_LOCATION_STORAGE_CODE, FAVORITE_CITIES_STORAGE_CODE } from '../utils/constants';
import Storage from '../services/StorageConnectionService';
import Geolocation from '../services/GeolocationService';
import ApiService from '../services/ForecastApiService';
import RequestController from '../controllers/RequestController';

const PREFIX = 'LOCATION_MANAGER';

export const CHANGE_LOCATION = `${PREFIX}/CHANGE`;
export const CHANGE_FAVORITE_LOCATIONS = `${PREFIX}/CHANGE_FAVORITE_LOCATIONS`;
export const CHANGE_SEARCH_STRING = `${PREFIX}/CHANGE_SEARCH_STRING`;
export const SET_HOURLY_FORECAST = `${PREFIX}/SET_HOURLY_FORECAST`;
export const SET_DAILY_FORECAST = `${PREFIX}/SET_DAILY_FORECAST`;
export const SET_FORECAST = `${PREFIX}/SET_FORECAST`;
export const SET_WARNINGS = `${PREFIX}/SET_WARNINGS`;

export const changeLocation = (location: LocationType): ChangeLocationActionType => ({
  type: CHANGE_LOCATION,
  currentLocation: location
});

export const changeFavoriteLocation = (
  favoriteLocations: Array<LocationType>
): FavoriteLocationsActionType => ({
  type: CHANGE_FAVORITE_LOCATIONS,
  favoriteCitiesList: favoriteLocations
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

export const setFavoriteCities =
  (location: LocationType, isFavorite: boolean): ThunkActionFavorite =>
  (dispatch: DispatchFavorite, getState: GetStoreState): void => {
    if (isFavorite) dispatch(addFavoriteLocation(location));
    else dispatch(removeFavoriteLocation(location));
  };

export const addFavoriteLocation =
  (location: LocationType): ThunkActionFavorite =>
  (dispatch: DispatchFavorite, getState: GetStoreState): void => {
    const favoriteLocations = getState().locationManager.favoriteCitiesList.concat([location]);
    dispatch(changeFavoriteLocationsList(favoriteLocations));
  };

export const removeFavoriteLocation =
  (location: LocationType): ThunkActionFavorite =>
  (dispatch: DispatchFavorite, getState: GetStoreState): void => {
    const favoriteLocations = getState().locationManager.favoriteCitiesList.filter(
      loc => loc.id !== location.id
    );
    dispatch(changeFavoriteLocationsList(favoriteLocations));
  };

export const changeFavoriteLocationsList =
  (locations: LocationsType): ThunkActionFavorite =>
  (dispatch: DispatchFavorite, getState: GetStoreState): void => {
    Storage.setValue(FAVORITE_CITIES_STORAGE_CODE, locations);
    dispatch(changeFavoriteLocation(locations));
  };

export const setCurrentHourlyForecast =
  (locationId: number | string): ThunkActionHourlyForecast =>
  async (dispatch: DispatchHourlyForecast, getState: GetStoreState): Promise<void> => {
    try {
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
    let currentLocationData = getState().locationManager.currentLocation;
    try {
      if (!currentLocationData.id || isRefreshCurrentLocation) {
        const position = await Geolocation.getCurrentPosition();
        const currentLocationApi = await ApiService.getLocationInfo(
          `${position.coords.longitude},${position.coords.latitude}`
        );
        dispatch(changeLocation(currentLocationApi.data));
      }
    } catch (error) {
      console.error(error);
    }
  };

export const changeWarnings = (warnings: WarningsType): WarningsActionType => ({
  type: SET_WARNINGS,
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