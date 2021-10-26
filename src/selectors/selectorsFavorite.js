import { createSelector } from 'reselect';

export const selectFavoriteLocations = state => state.locationManager.favoriteCitiesList;

export const selectFavoriteLoadingState = (isLoadingStates, location) => isLoadingStates[location?.id];

export const selectFavoriteCityIds = createSelector(selectFavoriteLocations, favoriteCitiesList =>
  favoriteCitiesList.map(favoriteLocation => favoriteLocation.id)
);

