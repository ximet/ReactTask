import { RootState } from 'store/rootReducer';

export const currentWeatherSelector = (state: RootState) => state.currentWeather;
