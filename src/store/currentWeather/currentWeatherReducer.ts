import { CurrentWeatherType, DailyWeatherType, HourlyWeatherType } from 'types/weatherTypes';
import { CurrentWeatherActions } from './currentWeatherActions';

interface CurrentWeatherState {
  data: CurrentWeatherType | null;
  error: string | null;
  loading: boolean;
}

export interface RequestCurrentWeatherAction {
  type: CurrentWeatherActions.REQUEST_CURRENT_WEATHER;
  payload: null;
}
export interface RequestCurrentWeatherSuccessAction {
  type: CurrentWeatherActions.REQUEST_CURRENT_WEATHER_SUCCESS;
  payload: CurrentWeatherType;
}
export interface RequestCurrentWeatherFailedAction {
  type: CurrentWeatherActions.REQUEST_CURRENT_WEATHER_FAILED;
  payload: string;
}

export type CurrentWeatherAction =
  | RequestCurrentWeatherAction
  | RequestCurrentWeatherSuccessAction
  | RequestCurrentWeatherFailedAction;

const defaultState: CurrentWeatherState = {
  data: null,
  error: null,
  loading: false
};

export const currentWeatherReducer = (
  state: CurrentWeatherState = defaultState,
  action: CurrentWeatherAction
): CurrentWeatherState => {
  switch (action.type) {
    case CurrentWeatherActions.REQUEST_CURRENT_WEATHER:
      return {
        ...state,
        loading: true
      };
    case CurrentWeatherActions.REQUEST_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case CurrentWeatherActions.REQUEST_CURRENT_WEATHER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
