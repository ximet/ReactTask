import { createSelector } from 'reselect';
import CityCard from '../../components/CityCard/CityCard';

export const getCityInfo = state => state.location.currentCity;
const getFavoriteCities = state => state.location.recentCities;

export const getCityTitle = createSelector([getCityInfo], ({ country, name, id }) => ({
  country,
  name,
  id
}));

export const getCityCards = createSelector([getFavoriteCities], favoriteCities => {
  return favoriteCities.map(city => ({
    id: city.id,
    slide: <CityCard info={city} />
  }));
});
