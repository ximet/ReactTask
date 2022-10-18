import { LayerState } from 'store/layer/layerReducer';
export const thunkUrlSchema: Record<LayerState, string> = {
  air: '/air-quality/forecast/hourly/',
  forecasts: '/forecast/hourly/'
};
