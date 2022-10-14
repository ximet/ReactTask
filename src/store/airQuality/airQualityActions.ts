import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store/rootReducer';
import { AirQualityType } from 'types/airQualityType';
import {
  AirQualityAction,
  RequestAirQuality,
  RequestAirQualityFailed,
  RequestAirQualitySuccess
} from './airQualityReducer';
import { Coordinates } from 'types/positionType';
import { getWeather } from 'services/getWeather';
import { CurrentWeatherAction } from 'store/currentWeather/currentWeatherReducer';

export enum AirQualityActions {
  REQUEST_AIR_QUALITY = 'REQUEST_AIR_QUALITY',
  REQUEST_AIR_QUALITY_SUCCESS = 'REQUEST_AIR_QUALITY_SUCCESS',
  REQUEST_AIR_QUALITY_FAILED = 'REQUEST_AIR_QUALITY_FAILED'
}

const requestAirQuality = (): RequestAirQuality => ({
  type: AirQualityActions.REQUEST_AIR_QUALITY
});
const requestAirQualitySuccess = (airQuality: AirQualityType[]): RequestAirQualitySuccess => ({
  type: AirQualityActions.REQUEST_AIR_QUALITY_SUCCESS,
  payload: airQuality
});
const requestAurQualityFailed = (error: string): RequestAirQualityFailed => ({
  type: AirQualityActions.REQUEST_AIR_QUALITY_FAILED,
  payload: error
});

export const loadAirQuality = (
  position: Coordinates
): ThunkAction<void, RootState, unknown, AirQualityAction> => dispatch => {
  dispatch(requestAirQuality());

  getWeather<{ forecast: AirQualityType[] }>('/air-quality/forecast/hourly/', position)
    .then(res => dispatch(requestAirQualitySuccess(res.forecast)))
    .catch(error => dispatch(requestAurQualityFailed(error.message)));
};
