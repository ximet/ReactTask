import { ThunkAction } from 'redux-thunk';
import { getWeather } from 'services/getWeather';
import { RootState } from 'store/rootReducer';
import { DailyWeatherType } from 'types/weatherTypes';
import {
  DailyWeatherAction,
  RequestDailyWeather,
  RequestDailyWeatherFailed,
  RequestDailyWeatherSuccess
} from './dailyWeatherReducer';

import { ThunkParams } from 'types/thunkParams';

export enum DailyWeatherActions {
  REQUEST_DAILY_WEATHER = 'REQUEST_DAILY_WEATHER',
  REQUEST_DAILY_WEATHER_SUCCESS = 'REQUEST_DAILY_WEATHER_SUCCESS',
  REQUEST_DAILY_WEATHER_FAILED = 'REQUEST_DAILY_WEATHER_FAILED'
}

const requestDailyWeather = (): RequestDailyWeather => ({
  type: DailyWeatherActions.REQUEST_DAILY_WEATHER
});
const requestDailyWeatherSuccess = (weather: DailyWeatherType[]): RequestDailyWeatherSuccess => ({
  type: DailyWeatherActions.REQUEST_DAILY_WEATHER_SUCCESS,
  payload: weather
});
const requestDailyWeatherFailed = (error: string): RequestDailyWeatherFailed => ({
  type: DailyWeatherActions.REQUEST_DAILY_WEATHER_FAILED,
  payload: error
});

export const loadDailyWeather = ({
  position,
  settings
}: ThunkParams): ThunkAction<void, RootState, unknown, DailyWeatherAction> => dispatch => {
  const { periods, dataset } = settings!;
  dispatch(requestDailyWeather());

  getWeather<{ forecast: DailyWeatherType[] }>('/forecast/daily/', position, {
    periods,
    dataset
  })
    .then(res => dispatch(requestDailyWeatherSuccess(res.forecast)))
    .catch(error => dispatch(requestDailyWeatherFailed(error.message)));
};
