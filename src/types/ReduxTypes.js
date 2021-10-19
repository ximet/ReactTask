// @flow
import type { LocationType, LocationForecastType } from './LocationType';
import type { HourlyForecastType, DailyForecastType } from './ForecastType';

export type GetStoreState = () => StoreState;

export type DispatchLocation = (
  action: ActionLocation | ThunkActionLocation | PromiseAction
) => any;

export type DispatchHourlyForecast = (
  action: ActionHourlyForecast | ThunkActionHourlyForecast | PromiseActionHourlyForecast
) => any;

export type DispatchDailyForecast = (
  action: ActionDailyForecast | ThunkActionDailyForecast | PromiseActionDailyForecast
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

export type PromiseAction = Promise<ActionLocation>;

export type PromiseActionHourlyForecast = Promise<ActionHourlyForecast>;

export type PromiseActionDailyForecast = Promise<ActionDailyForecast>;

export type ActionLocation = {
  type: string,
  currentLocation: LocationType
};

export type ActionHourlyForecast = {
  type: string,
  currentHourlyForecast: HourlyForecastType
};

export type ActionDailyForecast = {
  type: string,
  currentDailyForecast: DailyForecastType
};

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

export type StoreForecastState = {
  [number | string]: {
    cacheTimeStamp: number,
    value: LocationForecastType
  }
};
