import type { LocationInfo, WeatherInfo } from 'types';

export enum ActionType {
  SEARCH_LOCATION_PENDING = 'SEARCH_LOCATION_PENDING',
  SEARCH_LOCATION_SUCCESS = 'SEARCH_LOCATION_SUCCESS',
  SEARCH_LOCATION_FAIL = 'SEARCH_LOCATION_FAIL',

  GET_LOCATION_INFO_PENDING = 'GET_LOCATION_INFO_PENDING',
  GET_LOCATION_INFO_SUCCESS = 'GET_LOCATION_INFO_SUCCESS',
  GET_LOCATION_INFO_FAIL = 'GET_LOCATION_INFO_FAIL',

  GET_LOCATION_CURRENT_WEATHER_PENDING = 'GET_LOCATION_CURRENT_WEATHER_PENDING',
  GET_LOCATION_CURRENT_WEATHER_SUCCESS = 'GET_LOCATION_CURRENT_WEATHER_SUCCESS',
  GET_LOCATION_CURRENT_WEATHER_FAIL = 'GET_LOCATION_CURRENT_WEATHER_FAIL',

  SET_LOCATION_QUERY = 'SET_LOCATION_QUERY'
}

interface ActionPending {
  type:
    | ActionType.SEARCH_LOCATION_PENDING
    | ActionType.GET_LOCATION_INFO_PENDING
    | ActionType.GET_LOCATION_CURRENT_WEATHER_PENDING;
}

interface ActionSearchSuccess {
  type: ActionType.SEARCH_LOCATION_SUCCESS;
  payload: LocationInfo[];
}

interface ActionInfoSuccess {
  type: ActionType.GET_LOCATION_INFO_SUCCESS;
  payload: LocationInfo;
}

interface ActionCurrentWeatherSuccess {
  type: ActionType.GET_LOCATION_CURRENT_WEATHER_SUCCESS;
  payload: WeatherInfo;
}

interface ActionFail {
  type:
    | ActionType.SEARCH_LOCATION_FAIL
    | ActionType.GET_LOCATION_INFO_FAIL
    | ActionType.GET_LOCATION_CURRENT_WEATHER_FAIL;
  payload: string;
}

interface ActionQuery {
  type: ActionType.SET_LOCATION_QUERY;
  payload: string;
}

export type Action =
  | ActionPending
  | ActionSearchSuccess
  | ActionInfoSuccess
  | ActionCurrentWeatherSuccess
  | ActionQuery
  | ActionFail;
