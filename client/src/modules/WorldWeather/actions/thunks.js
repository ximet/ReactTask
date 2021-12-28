import { getState } from 'core-js/modules/web.url-search-params';
import { searchingFinished, searchingStart, SET_COUNTRY, setCountry } from './index';
import { weatherApi } from '../../../weatherAPI';
import { COUNTRIES_TO_SEARCH } from '../../../app_data/pages_info';
import { getSearchValue } from '../selectors';

export const onSearchClick = () => async (dispatch, getState) => {
  dispatch(searchingStart(true)); // searching start
  // const res = await weatherApi.searchCityByQuery(getSearchValue(getState()));
  // const country = res[0];

  // const result = await weatherApi.getWeather({ lon: country.lon, lat: country.lat });
  //
  // console.log(result);
  // console.log(country);
  // const countryInfo = {id:country.id,city:country.name, country: country.country, temperature: result.temperature}

  const result = await weatherApi.searchCityByQuery(getSearchValue(getState()));
  // const result = await weatherApi.getFullCityForecast();

  console.log(result);
  dispatch(setCountry(sortCountries(result)));// seT COUNTRY
  console.log(result);
  dispatch(searchingFinished(false)); // searching end
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
