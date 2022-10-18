import { LayerState } from 'store/layer/layerReducer';
import { Coordinates } from './positionType';

export interface ThunkParams {
  position: Coordinates;
  settings?: {
    periods?: string;
    dataset?: string;
  };
  layer?: LayerState;
}
