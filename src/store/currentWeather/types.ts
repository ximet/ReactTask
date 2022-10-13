import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/rootReducer';
import { CurrentWeatherAction } from './currentWeatherReducer';

export type CurrentWeatherThunkDispatch = ThunkDispatch<RootState, unknown, CurrentWeatherAction>;
