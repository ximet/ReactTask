import { ThunkAction } from 'redux-thunk';
import {
  CurrentWeatherAction,
  RequestCurrentWeatherAction,
  RequestCurrentWeatherFailedAction,
  RequestCurrentWeatherSuccessAction
} from './currentWeatherReducer';
import { CurrentWeatherType } from 'types/weatherTypes';
import { Coordinates } from 'types/positionType';
import { getWeather } from 'services/getWeather';
import { RootState } from 'store/rootReducer';

export enum CurrentWeatherActions {
  REQUEST_CURRENT_WEATHER = 'REQUEST_CURRENT_WEATHER',
  REQUEST_CURRENT_WEATHER_SUCCESS = 'REQUEST_CURRENT_WEATHER_SUCCESS',
  REQUEST_CURRENT_WEATHER_FAILED = 'REQUEST_CURRENT_WEATHER_FAILED'
}

const requestCurrentWeather = (): RequestCurrentWeatherAction => ({
  type: CurrentWeatherActions.REQUEST_CURRENT_WEATHER,
  payload: null
});

const requestCurrentWeatherSuccess = (
  weather: CurrentWeatherType
): RequestCurrentWeatherSuccessAction => ({
  type: CurrentWeatherActions.REQUEST_CURRENT_WEATHER_SUCCESS,
  payload: weather
});

const requestCurrentWeatherFailed = (error: string): RequestCurrentWeatherFailedAction => ({
  type: CurrentWeatherActions.REQUEST_CURRENT_WEATHER_FAILED,
  payload: error
});

export const loadCurrentWeather = (
  position: Coordinates
): ThunkAction<void, RootState, unknown, CurrentWeatherAction> => dispatch => {
  dispatch(requestCurrentWeather());

  getWeather<{ current: CurrentWeatherType }>('/current/', position)
    .then(res => dispatch(requestCurrentWeatherSuccess(res.current)))
    .catch(err => dispatch(requestCurrentWeatherFailed(err.message)));
};
