import { combineReducers } from 'redux';
import { layerReducer } from './layer/layerReducer';
import { themeReducer } from './theme/themeReducer';
import { currentWeatherReducer } from './currentWeather/currentWeatherReducer';
import { hourlyWeatherReducer } from './hourlyWeather/hourlyWeatherReducer';
import { dailyWeatherReducer } from './dailyWeather/dailyWeatherReducer';

export const rootReducer = combineReducers({
  layer: layerReducer,
  theme: themeReducer,
  currentWeather: currentWeatherReducer,
  hourlyWeather: hourlyWeatherReducer,
  dailyWeather: dailyWeatherReducer
});

export type RootState = ReturnType<typeof rootReducer>;
