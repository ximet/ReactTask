import { combineReducers } from 'redux';
import { layerReducer } from './layer/layerReducer';
import { themeReducer } from './theme/themeReducer';
import { currentWeatherReducer } from './currentWeather/currentWeatherReducer';

export const rootReducer = combineReducers({
  layer: layerReducer,
  theme: themeReducer,
  currentWeather: currentWeatherReducer
});

export type RootState = ReturnType<typeof rootReducer>;
