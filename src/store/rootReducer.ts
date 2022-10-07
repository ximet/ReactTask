import { combineReducers } from 'redux';
import { layerReducer } from './layer/layerReducer';
import { themeReducer } from './theme/themeReducer';

export const rootReducer = combineReducers({
  layer: layerReducer,
  theme: themeReducer
});

export type RootState = ReturnType<typeof rootReducer>;
