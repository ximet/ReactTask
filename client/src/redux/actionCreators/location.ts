import { Dispatch } from 'redux';

import { dispatchAsyncReq } from 'redux/utils';
import type { LocationInfoResponse, LocationAllResponse } from 'types';
import { ActionType, Action } from '../actionTypes/location';

export const searchLocations = (query: string) =>
  dispatchAsyncReq<Action, null, LocationAllResponse>({
    endpoint: `forecaApi/location/search/${query}`,
    method: 'get',
    ActionPending: ActionType.SEARCH_LOCATION_PENDING,
    ActionSuccess: ActionType.SEARCH_LOCATION_SUCCESS,
    ActionFail: ActionType.SEARCH_LOCATION_FAIL
  });

export const getLocationInfo = (query: string) =>
  dispatchAsyncReq<Action, null, LocationInfoResponse>({
    endpoint: `forecaApi/location/${query}`,
    method: 'get',
    ActionPending: ActionType.GET_LOCATION_INFO_PENDING,
    ActionSuccess: ActionType.GET_LOCATION_INFO_SUCCESS,
    ActionFail: ActionType.GET_LOCATION_INFO_FAIL
  });

export const getLocationCurrWeather = (query: string) =>
  dispatchAsyncReq<Action, null, LocationAllResponse>({
    endpoint: `forecaApi/current/${query}&tempunit=C&windunit=MS`,
    method: 'get',
    ActionPending: ActionType.GET_LOCATION_CURRENT_WEATHER_PENDING,
    ActionSuccess: ActionType.GET_LOCATION_CURRENT_WEATHER_SUCCESS,
    ActionFail: ActionType.GET_LOCATION_CURRENT_WEATHER_FAIL
  });

export const getLocationHourlyWeather = (query: string) =>
  dispatchAsyncReq<Action, null, LocationAllResponse>({
    endpoint: `forecaApi/forecast/hourly/${query}&tempunit=C&windunit=MS`,
    method: 'get',
    ActionPending: ActionType.GET_LOCATION_HOURLY_WEATHER_PENDING,
    ActionSuccess: ActionType.GET_LOCATION_HOURLY_WEATHER_SUCCESS,
    ActionFail: ActionType.GET_LOCATION_HOURLY_WEATHER_FAIL
  });

export const getLocationThreeHourlyWeather = (query: string) =>
  dispatchAsyncReq<Action, null, LocationAllResponse>({
    endpoint: `forecaApi/forecast/3hourly/${query}&tempunit=C&windunit=MS`,
    method: 'get',
    ActionPending: ActionType.GET_LOCATION_THREE_HOURLY_WEATHER_PENDING,
    ActionSuccess: ActionType.GET_LOCATION_THREE_HOURLY_WEATHER_SUCCESS,
    ActionFail: ActionType.GET_LOCATION_THREE_HOURLY_WEATHER_FAIL
  });

export const getLocationDailyWeather = (query: string) =>
  dispatchAsyncReq<Action, null, LocationAllResponse>({
    endpoint: `forecaApi/forecast/daily/${query}&tempunit=C&windunit=MS`,
    method: 'get',
    ActionPending: ActionType.GET_LOCATION_DAILY_WEATHER_PENDING,
    ActionSuccess: ActionType.GET_LOCATION_DAILY_WEATHER_SUCCESS,
    ActionFail: ActionType.GET_LOCATION_DAILY_WEATHER_FAIL
  });

export const getLocationHourlyAirQuality = (query: string) =>
  dispatchAsyncReq<Action, null, LocationAllResponse>({
    endpoint: `forecaApi/air-quality/forecast/hourly/${query}`,
    method: 'get',
    ActionPending: ActionType.GET_LOCATION_HOURLY_AIR_QUALITY_PENDING,
    ActionSuccess: ActionType.GET_LOCATION_HOURLY_AIR_QUALITY_SUCCESS,
    ActionFail: ActionType.GET_LOCATION_HOURLY_AIR_QUALITY_FAIL
  });

export const getLocationDailyAirQuality = (query: string) =>
  dispatchAsyncReq<Action, null, LocationAllResponse>({
    endpoint: `forecaApi/air-quality/forecast/daily/${query}`,
    method: 'get',
    ActionPending: ActionType.GET_LOCATION_DAILY_AIR_QUALITY_PENDING,
    ActionSuccess: ActionType.GET_LOCATION_DAILY_AIR_QUALITY_SUCCESS,
    ActionFail: ActionType.GET_LOCATION_DAILY_AIR_QUALITY_FAIL
  });

export const setLocationQuery = (query: string) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.SET_LOCATION_QUERY, payload: query });
};
