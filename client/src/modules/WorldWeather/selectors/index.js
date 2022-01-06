import { createSelector } from 'reselect';
import { getWorldWeather } from './baseSelector';

export const getSearchValue = createSelector([getWorldWeather], ({ searchValue }) => searchValue);
export const getCountryList = createSelector([getWorldWeather], ({ countryList }) => countryList);

export const getSelectedCountry = createSelector(
  [getWorldWeather],
  ({ selectedCountry }) => selectedCountry
);

export const getSuitableCountry = createSelector(
  [getCountryList, getSearchValue],
  (countries, searchValue) => {
    return countries.find(con => `${con.name},${con.country}` === searchValue);
  }
);

export const getWeatherDetails = createSelector([getSelectedCountry], selectedCountry => {
  if (selectedCountry) {
    const {
      feelsLikeTemp: feelsLike,
      windSpeed,
      pressure,
      cloudiness,
      visibility
    } = selectedCountry.now;
    return { feelsLike, windSpeed, pressure, cloudiness, visibility };
  }
  return null;
});
