import { Coordinates } from './positionType';

export interface ThunkParams {
  position: Coordinates;
  settings: {
    periods?: string;
    dataset?: string;
  };
}
