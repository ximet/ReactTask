import { createSelector } from 'reselect';

export const getMatchedCitiesData = state => state.matchedCities.cities;

export const transformCitiesData = createSelector(getMatchedCitiesData, cities => {
  return [...cities]
    .sort((a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name))
    .map(city => ({
      name: `${city.name.toLowerCase()}`,
      country: `${city.country.toLowerCase()}`,
      id: city.id
    }));
});
