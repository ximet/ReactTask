export const selectFavoriteCityIds = favoriteCitiesList => {
  return favoriteCitiesList.map(favoriteLocation => favoriteLocation.id);
};
