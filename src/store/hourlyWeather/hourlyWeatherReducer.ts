import { HourlyWeatherType } from 'types/weatherTypes';
import { HourlyWeatherActions } from './hourlyWeatherActions';

export interface RequestHourlyWeather {
  type: HourlyWeatherActions.REQUEST_HOURLY_WEATHER;
}
export interface RequestHourlyWeatherSuccess {
  type: HourlyWeatherActions.REQUEST_HOURLY_WEATHER_SUCCESS;
  payload: HourlyWeatherType[];
}
export interface RequestHourlyWeatherFailed {
  type: HourlyWeatherActions.REQUEST_HOURLY_WEATHER_FAILED;
  payload: string;
}

export type HourlyWeatherAction =
  | RequestHourlyWeather
  | RequestHourlyWeatherSuccess
  | RequestHourlyWeatherFailed;

interface HourlyWeatherState {
  data: HourlyWeatherType[] | null;
  loading: boolean;
  error: string | null;
}

const defaultState: HourlyWeatherState = {
  data: null,
  loading: false,
  error: null
};

export const hourlyWeatherReducer = (
  state: HourlyWeatherState = defaultState,
  action: HourlyWeatherAction
): HourlyWeatherState => {
  switch (action.type) {
    case HourlyWeatherActions.REQUEST_HOURLY_WEATHER:
      return {
        ...state,
        loading: true
      };
    case HourlyWeatherActions.REQUEST_HOURLY_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case HourlyWeatherActions.REQUEST_HOURLY_WEATHER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
