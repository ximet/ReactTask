import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/rootReducer';
import { CurrentWeatherAction } from './currentWeatherReducer';

export type CurrentWeatherDispatch = ThunkDispatch<RootState, unknown, CurrentWeatherAction>;
