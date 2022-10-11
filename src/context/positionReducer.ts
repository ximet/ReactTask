import { CHANGE_POSITION } from './positionActions';
import { Coordinates } from 'types/positionType';

export type PositionContextState = {
  position: Coordinates;
  positionError: string;
};

export type PositionActionData = {
  type: string;
  payload: PositionContextState;
};

export function reducer(state: PositionContextState, { type, payload }: PositionActionData) {
  switch (type) {
    case CHANGE_POSITION:
      return {
        ...state,
        position: {
          latitude: payload.position.latitude,
          longitude: payload.position.longitude
        }
      };

    default:
      return state;
  }
}
