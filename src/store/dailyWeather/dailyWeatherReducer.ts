import { DailyWeatherType } from 'types/weatherTypes';
import { DailyWeatherActions } from './dailyWeatherActions';

export interface RequestDailyWeather {
  type: DailyWeatherActions.REQUEST_DAILY_WEATHER;
}
export interface RequestDailyWeatherSuccess {
  type: DailyWeatherActions.REQUEST_DAILY_WEATHER_SUCCESS;
  payload: DailyWeatherType[];
}
export interface RequestDailyWeatherFailed {
  type: DailyWeatherActions.REQUEST_DAILY_WEATHER_FAILED;
  payload: string;
}

export type DailyWeatherAction =
  | RequestDailyWeather
  | RequestDailyWeatherSuccess
  | RequestDailyWeatherFailed;

interface DailyWeatherState {
  data: DailyWeatherType[] | null;
  loading: boolean;
  error: string | null;
}

const defaultState: DailyWeatherState = {
  data: null,
  loading: false,
  error: null
};

export const dailyWeatherReducer = (
  state: DailyWeatherState = defaultState,
  action: DailyWeatherAction
): DailyWeatherState => {
  switch (action.type) {
    case DailyWeatherActions.REQUEST_DAILY_WEATHER:
      return {
        ...state,
        loading: true
      };
    case DailyWeatherActions.REQUEST_DAILY_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case DailyWeatherActions.REQUEST_DAILY_WEATHER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
