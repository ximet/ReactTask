import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/rootReducer';
import { AirQualityAction } from './airQualityReducer';

export type AirQualityDispatch = ThunkDispatch<RootState, unknown, AirQualityAction>;
