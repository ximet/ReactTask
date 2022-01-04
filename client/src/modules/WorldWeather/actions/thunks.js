import {
  changeSearchValue,
  searchingFinished,
  searchingStart,
  setCountryList,
  setSelectedCountry,
  clearCountryList,
  clearSearchValue
} from './index';
import { weatherApi } from '../../../weatherAPI';
import { getSearchValue, getSuitableCountry } from '../selectors';

export const onSearchClick = value => async (dispatch, getState) => {
  dispatch(changeSearchValue(value));
  dispatch(searchingStart(true));

  const result = await weatherApi.searchCityByQuery(getSearchValue(getState()));
  const countries = sortCountries([...new Set(result)]);

  dispatch(setCountryList(countries));
  dispatch(searchingFinished(false));
};


export const onSelectCountry = () => async (dispatch, getState) => {
  const country = getSuitableCountry(getState());
  const weatherForecast = await weatherApi.getFullCityForecast({
    lon: country.lon,
    lat: country.lat
  });

  dispatch(setSelectedCountry(weatherForecast));
  dispatch(clearCountryList());
  dispatch(clearSearchValue());
};

export const getCurrentLocationWeather = () => async dispatch => {
  const weatherForecast = await weatherApi.getFullCityForecast();
  dispatch(setSelectedCountry(weatherForecast));
};

const sortCountries = countryList => {
  return countryList.sort((a, b) => {
    const conA = a.country.toLowerCase();
    const conB = b.country.toLowerCase();

    if (conA === conB) {
      const cityA = a.name.toLowerCase();
      const cityB = b.name.toLowerCase();

      return cityA - cityB;
    }

    return conA > conB ? 1 : -1;
  });
};
