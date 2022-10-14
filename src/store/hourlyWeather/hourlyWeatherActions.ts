import { ThunkAction } from 'redux-thunk';
import { HourlyWeatherType } from 'types/weatherTypes';
import { Coordinates } from 'types/positionType';

import { RootState } from 'store/rootReducer';
import {
  HourlyWeatherAction,
  RequestHourlyWeather,
  RequestHourlyWeatherSuccess,
  RequestHourlyWeatherFailed
} from './hourlyWeatherReducer';

import { getWeather } from 'services/getWeather';

export enum HourlyWeatherActions {
  REQUEST_HOURLY_WEATHER = 'REQUEST_HOURLY_WEATHER',
  REQUEST_HOURLY_WEATHER_SUCCESS = 'REQUEST_HOURLY_WEATHER_SUCCESS',
  REQUEST_HOURLY_WEATHER_FAILED = 'REQUEST_HOURLY_WEATHER_FAILED'
}

const requestHourlyWeather = (): RequestHourlyWeather => ({
  type: HourlyWeatherActions.REQUEST_HOURLY_WEATHER
});
const requestHourlyWeatherSuccess = (
  hourlyWeather: HourlyWeatherType[]
): RequestHourlyWeatherSuccess => ({
  type: HourlyWeatherActions.REQUEST_HOURLY_WEATHER_SUCCESS,
  payload: hourlyWeather
});
const requestHourlyWeatherFailed = (error: string): RequestHourlyWeatherFailed => ({
  type: HourlyWeatherActions.REQUEST_HOURLY_WEATHER_FAILED,
  payload: error
});

export const loadHourlyWeather = (
  position: Coordinates
): ThunkAction<void, RootState, unknown, HourlyWeatherAction> => dispatch => {
  dispatch(requestHourlyWeather());

  getWeather<{ forecast: HourlyWeatherType[] }>('/forecast/hourly/', position, {
    dataset: 'full'
  })
    .then(res => dispatch(requestHourlyWeatherSuccess(res.forecast)))
    .catch(err => dispatch(requestHourlyWeatherFailed(err.message)));
};
