// @flow
import type { LocationType, LocationForecastType } from './LocationType';
import type { HourlyForecastType, DailyForecastType } from './ForecastType';
import type {
  ChangeLocationActionType,
  HourlyForecastActionType,
  DailyForecastActionType,
  FavoriteLocationsActionType
} from './ActionsTypes';

export type GetStoreState = () => StoreState;

export type DispatchLocation = (
  action: ChangeLocationActionType | ThunkActionLocation | PromiseAction
) => any;

export type DispatchHourlyForecast = (
  action: HourlyForecastActionType | ThunkActionHourlyForecast | PromiseActionHourlyForecast
) => any;

export type DispatchDailyForecast = (
  action: DailyForecastActionType | ThunkActionDailyForecast | PromiseActionDailyForecast
) => any;

export type DispatchFavorite = (
  action: FavoriteLocationsActionType | ThunkActionFavorite | PromiseActionFavorite
) => any;

export type ThunkActionLocation = (dispatch: DispatchLocation, getState: GetStoreState) => any;

export type ThunkActionHourlyForecast = (
  dispatch: DispatchHourlyForecast,
  getState: GetStoreState
) => any;

export type ThunkActionDailyForecast = (
  dispatch: DispatchDailyForecast,
  getState: GetStoreState
) => any;

export type ThunkActionFavorite = (dispatch: DispatchFavorite, getState: GetStoreState) => any;

export type PromiseAction = Promise<ChangeLocationActionType>;

export type PromiseActionHourlyForecast = Promise<HourlyForecastActionType>;

export type PromiseActionDailyForecast = Promise<DailyForecastActionType>;

export type PromiseActionFavorite = Promise<FavoriteLocationsActionType>;

export type StoreStateLocationManager = {
  currentLocation: LocationType,
  searchString: string,
  favoriteCitiesList: Array<LocationType>,
  forecasts: Array<LocationForecastType>,
  currentHourlyForecast: HourlyForecastType,
  currentDailyForecast: DailyForecastType
};

export type StoreState = {
  locationManager: StoreStateLocationManager
};
