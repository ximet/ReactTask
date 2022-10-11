import { TURN_ON_AIR, TURN_ON_FORECASTS } from './layerActions';

interface ViewAction {
  type: string;
}

export type LayerState = 'forecasts' | 'air';

export const layerReducer = (state: LayerState = 'forecasts', action: ViewAction): LayerState => {
  switch (action.type) {
    case TURN_ON_FORECASTS:
      return 'forecasts';
    case TURN_ON_AIR:
      return 'air';
    default:
      return state;
  }
};
