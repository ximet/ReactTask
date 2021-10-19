export const selectFavoriteCitiesId = favoriteCitiesList => {
  return favoriteCitiesList.map(favoriteLocation => favoriteLocation.id);
};
