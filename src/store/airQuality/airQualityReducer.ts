import { AirQualityType } from 'types/airQualityType';
import { AirQualityActions } from './airQualityActions';

export interface RequestAirQuality {
  type: AirQualityActions.REQUEST_AIR_QUALITY;
}
export interface RequestAirQualitySuccess {
  type: AirQualityActions.REQUEST_AIR_QUALITY_SUCCESS;
  payload: AirQualityType[];
}
export interface RequestAirQualityFailed {
  type: AirQualityActions.REQUEST_AIR_QUALITY_FAILED;
  payload: string;
}

interface AirQualityState {
  data: AirQualityType[] | null;
  loading: boolean;
  error: string | null;
}

const defaultState: AirQualityState = {
  data: null,
  loading: false,
  error: null
};

export type AirQualityAction =
  | RequestAirQuality
  | RequestAirQualitySuccess
  | RequestAirQualityFailed;

export const airQualityReducer = (
  state: AirQualityState = defaultState,
  action: AirQualityAction
): AirQualityState => {
  switch (action.type) {
    case AirQualityActions.REQUEST_AIR_QUALITY:
      return {
        ...state,
        loading: true
      };
    case AirQualityActions.REQUEST_AIR_QUALITY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case AirQualityActions.REQUEST_AIR_QUALITY_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
