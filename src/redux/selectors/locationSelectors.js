import { createSelector } from 'reselect';

export const getCityInfo = state => state.location.currentCity;

export const getCityTitle = createSelector([getCityInfo], ({ country, name, id }) => ({
  country,
  name,
  id
}));
