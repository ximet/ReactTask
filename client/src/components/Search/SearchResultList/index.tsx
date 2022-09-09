import React from 'react';

// Types
import { LocationInfo } from 'types';

// Components
import SearchResultItem from './SearchResultItem';

// Styles
import * as S from '../Search.styles';

interface SearchResultListProps {
  data: LocationInfo[];
}

const SearchResultList = ({ data }: SearchResultListProps) => (
  <S.SearchResultList>
    {data && data.map(item => <SearchResultItem key={item.id} data={item} />)}
  </S.SearchResultList>
);

export default SearchResultList;
