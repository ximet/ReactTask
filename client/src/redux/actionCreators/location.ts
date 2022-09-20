import { Dispatch } from 'redux';

import { dispatchAsyncReq } from 'redux/utils';
import type { LocationInfoResponse, LocationAllResponse } from 'types';
import { ActionType, Action } from '../actionTypes/location';

export const searchLocations = (query: string) =>
  dispatchAsyncReq<Action, null, LocationAllResponse>(
    `forecaApi/location/search/${query}`,
    'get',
    null,
    ActionType.SEARCH_LOCATION_PENDING,
    ActionType.SEARCH_LOCATION_SUCCESS,
    ActionType.SEARCH_LOCATION_FAIL
  );

export const getLocationInfo = (query: string) =>
  dispatchAsyncReq<Action, null, LocationInfoResponse>(
    `forecaApi/location/${query}`,
    'get',
    null,
    ActionType.GET_LOCATION_INFO_PENDING,
    ActionType.GET_LOCATION_INFO_SUCCESS,
    ActionType.GET_LOCATION_INFO_FAIL
  );

export const getLocationCurrWeather = (query: string) =>
  dispatchAsyncReq<Action, null, LocationAllResponse>(
    `forecaApi/current/${query}&tempunit=C&windunit=MS`,
    'get',
    null,
    ActionType.GET_LOCATION_CURRENT_WEATHER_PENDING,
    ActionType.GET_LOCATION_CURRENT_WEATHER_SUCCESS,
    ActionType.GET_LOCATION_CURRENT_WEATHER_FAIL
  );

export const getLocationHourlyWeather = (query: string) =>
  dispatchAsyncReq<Action, null, LocationAllResponse>(
    `forecaApi/forecast/hourly/${query}&tempunit=C&windunit=MS`,
    'get',
    null,
    ActionType.GET_LOCATION_HOURLY_WEATHER_PENDING,
    ActionType.GET_LOCATION_HOURLY_WEATHER_SUCCESS,
    ActionType.GET_LOCATION_HOURLY_WEATHER_FAIL
  );

export const getLocationThreeHourlyWeather = (query: string) =>
  dispatchAsyncReq<Action, null, LocationAllResponse>(
    `forecaApi/forecast/3hourly/${query}&tempunit=C&windunit=MS`,
    'get',
    null,
    ActionType.GET_LOCATION_THREE_HOURLY_WEATHER_PENDING,
    ActionType.GET_LOCATION_THREE_HOURLY_WEATHER_SUCCESS,
    ActionType.GET_LOCATION_THREE_HOURLY_WEATHER_FAIL
  );

export const getLocationDailyWeather = (query: string) =>
  dispatchAsyncReq<Action, null, LocationAllResponse>(
    `forecaApi/forecast/daily/${query}&tempunit=C&windunit=MS`,
    'get',
    null,
    ActionType.GET_LOCATION_DAILY_WEATHER_PENDING,
    ActionType.GET_LOCATION_DAILY_WEATHER_SUCCESS,
    ActionType.GET_LOCATION_DAILY_WEATHER_FAIL
  );

export const setLocationQuery = (query: string) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.SET_LOCATION_QUERY, payload: query });
};
