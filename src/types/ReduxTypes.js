// @flow
import type { LocationType, LocationForecastType } from './LocationType';

export type DispatchLocation = (
  action: ActionLocation | ThunkActionLocation | PromiseAction
) => any;

export type GetStoreState = () => StoreState;

export type ThunkActionLocation = (dispatch: DispatchLocation, getState: GetStoreState) => any;

export type PromiseAction = Promise<ActionLocation>;

export type ActionLocation = {
  type: string,
  currentLocation: LocationType
};

export type StoreStateLocationManager = {
  currentLocation: LocationType,
  searchString: string,
  favoriteCitiesList: Array<LocationType>,
  forecasts: StoreForecastState
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
