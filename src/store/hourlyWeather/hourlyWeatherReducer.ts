import { HourlyWeatherActions } from './hourlyWeatherActions';
import { WeatherReduxState } from 'types/reduxState';
import { UnionHourlyWeatherType } from 'types/unionHourlyWeatherType';

export interface RequestHourlyWeather {
  type: HourlyWeatherActions.REQUEST_HOURLY_WEATHER;
}
export interface RequestHourlyWeatherSuccess {
  type: HourlyWeatherActions.REQUEST_HOURLY_WEATHER_SUCCESS;
  payload: UnionHourlyWeatherType;
}
export interface RequestHourlyWeatherFailed {
  type: HourlyWeatherActions.REQUEST_HOURLY_WEATHER_FAILED;
  payload: string;
}

export type HourlyWeatherAction =
  | RequestHourlyWeather
  | RequestHourlyWeatherSuccess
  | RequestHourlyWeatherFailed;

type HourlyWeatherState = WeatherReduxState<UnionHourlyWeatherType>;

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
