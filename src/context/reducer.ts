import { CHANGE_POSITION } from './actions';

export type State = {
  position: {
    latitude: number;
    longitude: number;
  };
  positionError: string;
};

export type ActionData = {
  type: string;
  payload: State;
};

export function reducer(state: State, { type, payload }: ActionData) {
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
