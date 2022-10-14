import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/rootReducer';
import { HourlyWeatherAction } from './hourlyWeatherReducer';

export type HourlyWeatherDispatch = ThunkDispatch<RootState, unknown, HourlyWeatherAction>;
