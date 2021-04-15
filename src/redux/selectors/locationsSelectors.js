import { createSelectorCreator, defaultMemoize } from 'reselect';
import { areLocationsTheSame } from '../../common/helpers';

const locationsSelector = state => state.locations.locations;
export const isLocationsLoadingSelector = state => state.locations.isLoading;

// I realize this is a bit of overkill, just wanted to try out the selectors
const createDeepEqualSelector = createSelectorCreator(defaultMemoize, areLocationsTheSame);

export const transformLocations = createDeepEqualSelector(locationsSelector, locations =>
  locations.map(location => ({ ...location, fullName: `${location.name}, ${location.country}` }))
);
