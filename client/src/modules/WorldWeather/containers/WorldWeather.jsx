import React from 'react';
import * as S from '../../../app_data/styles_info/common_styles';
import { SearchInput } from '../components/SearchInput';
import { Countries } from './Countries/';

export function WorldWeather(props) {
  return (
    <S.Box>
      <S.Container maxWidth={1270}>
        <S.Title m={'0 22px'} variant="h4" align="left">
          Select country weather
        </S.Title>
        <SearchInput />
        <Countries countries={null} />
      </S.Container>
    </S.Box>
  );
}
