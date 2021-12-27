import React, { useEffect } from 'react';
import * as S from '../../../app_data/styles_info/common_styles';
import { SearchInput } from '../components/SearchInput';
import { Countries } from './Countries/';
import { getCountryList, getSearchValue } from '../selectors';
import { COUNTRIES_TO_SEARCH } from '../../../app_data/pages_info';

export function WorldWeather(props) {
  console.log(props);
  useEffect(() => {
    // call searchWeather api
  }, []);
  return (
    <S.Box>
      <S.Container maxWidth={1270}>
        <S.Title m={'0 22px'} variant="h4" align="left">
          Select country weather
        </S.Title>
        <SearchInput
          changeSearchValue={props.changeSearchValue}
          searchValue={props.searchValue}
          // onSearchClick={props.searchCountry}
          onSearchClick={null}
        />
        {/*<Countries countries={props.countries} />*/}
        <Countries countries={COUNTRIES_TO_SEARCH} />

      </S.Container>
    </S.Box>
  );
}

export const mapStateToProps = state => {
  return {
    searchValue: getSearchValue(state),
    countries: getCountryList(state)
  };
};
