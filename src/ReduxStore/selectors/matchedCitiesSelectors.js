import { createSelector } from 'reselect';

export const getMatchedCitiesData = state => state.matchedCities.cities;

export const selectMatchedCitiesData = createSelector(getMatchedCitiesData, cities => {
  return cities
    .map(city => ({
      name: `${city.name.toLowerCase()}`,
      country: `${city.country.toLowerCase()}`,
      id: city.id
    }))
    .sort((a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name));
});
