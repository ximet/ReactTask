import { createSelector } from 'reselect';
import CityCard from '../../components/CityCard/Container';

export const getCityInfo = state => state.location.currentCity;
export const getFavoriteCities = state => state.location.recentCities;
export const getCurrentTimeZone = state => state.location.currentCity.timezone;

export const selectCityTitle = createSelector([getCityInfo], ({ country, name, id }) => ({
  country,
  name,
  id
}));

export const selectCityCards = createSelector([getFavoriteCities], favoriteCities => {
  return favoriteCities.map(city => <CityCard info={city} />);
});
