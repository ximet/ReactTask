import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/rootReducer';
import { DailyWeatherAction } from './dailyWeatherReducer';

export type DailyWeatherDispatch = ThunkDispatch<RootState, unknown, DailyWeatherAction>;
