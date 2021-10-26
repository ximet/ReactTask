// @flow
import type { LocationType } from '../../types/LocationType';
import type { WarningsType } from '../../types/WarningsType';

export type WarningsPropsType = {
  currentLocation: LocationType,
  warnings: WarningsType,
  setWarnings: (locationId: string | number) => void
};
