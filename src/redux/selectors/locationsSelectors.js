import { createSelectorCreator, defaultMemoize } from 'reselect';
import isEqual from 'lodash.isequal';

const locationsSelector = state => state.locations.locations;
export const isLocationsLoadingSelector = state => state.locations.isLoading;

// I realize this is a bit of overkill, just wanted to try out the selectors
const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

export const transformLocations = createDeepEqualSelector(locationsSelector, locations =>
  locations?.reduce((acc, location) => {
    acc.push({ ...location, fullName: `${location.name}, ${location.country}` });
    return acc;
  }, [])
);
