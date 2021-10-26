export const selectFavoriteCityIds = favoriteCitiesList => {
  return favoriteCitiesList.map(favoriteLocation => favoriteLocation.id);
};

export const selectFavoriteLoadingState = (isLoadingStates, location) => {
  return isLoadingStates[location?.id];
};
