import { TURN_ON_AIR, TURN_ON_FORECASTS } from './layerActions';

interface ViewAction {
  type: string;
}

export type layerState = 'forecasts' | 'air';

export const layerReducer = (state: layerState = 'forecasts', action: ViewAction): layerState => {
  switch (action.type) {
    case TURN_ON_FORECASTS:
      return (state = 'forecasts');
    case TURN_ON_AIR:
      return (state = 'air');
    default:
      return state;
  }
};
