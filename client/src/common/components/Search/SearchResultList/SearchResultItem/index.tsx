import React from 'react';

// Styles
import * as S from '../../styles';

// Types
import { SearchResult } from '../../../../../types';

interface SearchResultItemProps {
  data: SearchResult;
}

const SearchResultItem = ({ data }: SearchResultItemProps) => {
  const { name, state, country } = data;

  return (
    <S.SearchResultItem>{`${name}, ${state ? `${state},` : ''} ${country}`}</S.SearchResultItem>
  );
};

export default SearchResultItem;
