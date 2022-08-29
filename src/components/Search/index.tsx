import React, { FunctionComponent } from 'react';

// Components
import Input from '../Input';

// Styles
import * as S from './styles';

// Assets
import { IconSearch } from '../../assets/images/svg';

const Search: FunctionComponent = () => (
  <S.Search>
    <IconSearch />
    <Input inputElement="input" type="search" placeholder="Search city..." />
  </S.Search>
);

export default Search;
