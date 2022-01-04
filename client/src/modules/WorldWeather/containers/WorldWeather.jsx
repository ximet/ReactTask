import React, { useEffect } from 'react';
import * as S from '../../../app_data/styles_info/common_styles';
import { SearchInput } from '../components/SearchInput';
import {
  getCountryList,
  getSearchValue,
  getSelectedCountry,
  getWeatherDetails
} from '../selectors';
import PropTypes from 'prop-types';
import { Country } from '../components/Country';

WorldWeather.propTypes = {
  selectedCountry: PropTypes.shape({
    now: PropTypes.shape({
      temperature: PropTypes.number,
      symbol: PropTypes.string
    }),
    countryInfo: PropTypes.shape({
      name: PropTypes.string,
      country: PropTypes.string
    })
  }),
  weatherDetails: PropTypes.shape({
    windSpeed: PropTypes.number,
    feelsLike: PropTypes.number,
    cloudiness: PropTypes.number,
    visibility: PropTypes.number,
    pressure: PropTypes.number
  }),
  countryList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      country: PropTypes.string
    })
  ),
  searchValue: PropTypes.string
};

export function WorldWeather(props) {
  useEffect(async () => props.getCurrentLocationWeather(), []);
  return (
    <S.Box>
      <S.Container maxWidth={970} padding="0">
        <SearchInput
          countries={props.countryList}
          searchValue={props.searchValue}
          onSearchClick={props.onSearchClick}
          onSelectCountry={props.onSelectCountry}
        />
        <Country selectedCountry={props.selectedCountry} weatherDetails={props.weatherDetails} />
      </S.Container>
    </S.Box>
  );
}

export const mapStateToProps = state => {
  return {
    searchValue: getSearchValue(state),
    countryList: getCountryList(state),
    selectedCountry: getSelectedCountry(state),
    weatherDetails: getWeatherDetails(state)
  };
};
