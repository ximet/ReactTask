import React from 'react';

// Components
import SearchResultItem from './SearchResultItem';

// Styles
import * as S from '../styles';

// Types
import { LocationInfo } from '../../../../types';

interface SearchResultListProps {
  data: LocationInfo[];
}

const SearchResultList = ({ data }: SearchResultListProps) => (
  <S.SearchResultList>
    {data && data.map(item => <SearchResultItem key={item.id} data={item} />)}
  </S.SearchResultList>
);

export default SearchResultList;
