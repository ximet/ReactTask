import React, { useRef } from 'react';

// Styles
import * as S from '../../styles';

// Types
import { searchResultType } from '../../../../../types';

interface SearchResultItemProps {
  searchResult: searchResultType;
}

const SearchResultItem = ({ searchResult }: SearchResultItemProps) => {
  const searchResultItemRef = useRef<HTMLLIElement>(null);

  const { name, state, country } = searchResult;

  return (
    <S.SearchResultItem ref={searchResultItemRef}>{`${name}, ${
      state ? `${state},` : ''
    } ${country}`}</S.SearchResultItem>
  );
};

export default SearchResultItem;
