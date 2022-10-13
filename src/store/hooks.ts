import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from './rootReducer';
import { AppDispatch } from 'store';
import { CurrentWeatherDispatch } from './currentWeather/types';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useCurrentWeatherDispatch: () => CurrentWeatherDispatch = useDispatch;
