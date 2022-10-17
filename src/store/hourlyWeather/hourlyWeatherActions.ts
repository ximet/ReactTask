import { ThunkParams } from './../../types/thunkParams';
import { thunkUrlSchema } from './thunkUrlSchema';
import { ThunkAction } from 'redux-thunk';

import { RootState } from 'store/rootReducer';
import {
  HourlyWeatherAction,
  RequestHourlyWeather,
  RequestHourlyWeatherSuccess,
  RequestHourlyWeatherFailed
} from './hourlyWeatherReducer';
import { UnionHourlyWeatherType } from 'types/unionHourlyWeatherType';

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
  hourlyWeather: UnionHourlyWeatherType
): RequestHourlyWeatherSuccess => ({
  type: HourlyWeatherActions.REQUEST_HOURLY_WEATHER_SUCCESS,
  payload: hourlyWeather
});
const requestHourlyWeatherFailed = (error: string): RequestHourlyWeatherFailed => ({
  type: HourlyWeatherActions.REQUEST_HOURLY_WEATHER_FAILED,
  payload: error
});

export const loadHourlyWeather = ({
  position,
  layer
}: ThunkParams): ThunkAction<void, RootState, unknown, HourlyWeatherAction> => dispatch => {
  dispatch(requestHourlyWeather());

  getWeather<{ forecast: UnionHourlyWeatherType }>(thunkUrlSchema[layer!], position, {
    dataset: 'full'
  })
    .then(res => dispatch(requestHourlyWeatherSuccess(res.forecast)))
    .catch(err => dispatch(requestHourlyWeatherFailed(err.message)));
};
