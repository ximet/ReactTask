import { createSelector } from 'reselect';

const locationsSelector = state => state.locations.locations;
export const isLocationsLoadingSelector = state => state.locations.isLoading;

export const transformLocations = createSelector(locationsSelector, locations =>
  locations.map(location => ({
    ...location,
    fullName: `${location.name}, ${location.country}`
  }))
);
