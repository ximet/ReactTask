import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from './rootReducer';
import { AppDispatch } from 'store';
import { CurrentWeatherDispatch } from './currentWeather/types';
import { HourlyWeatherDispatch } from './hourlyWeather/types';
import { AirQualityDispatch } from './airQuality/types';
import { DailyWeatherDispatch } from './dailyWeather/types';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useCurrentWeatherDispatch: () => CurrentWeatherDispatch = useDispatch;
export const useHourlyWeatherDispatch: () => HourlyWeatherDispatch = useDispatch;
export const useAirQualityDispatch: () => AirQualityDispatch = useDispatch;
export const useDailyWeatherDispatch: () => DailyWeatherDispatch = useDispatch;
