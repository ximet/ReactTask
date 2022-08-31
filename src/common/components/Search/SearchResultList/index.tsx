import React from 'react';

// Components
import SearchResultItem from './SearchResultItem';

// Styles
import * as S from '../styles';

// Types
import { searchResultType } from '../../../../types';

interface SearchResultListProps {
  searchResults: [searchResultType];
}

const SearchResultList = ({ searchResults }: SearchResultListProps) => (
  <S.SearchResultList>
    {searchResults &&
      searchResults.map(searchResult => (
        <SearchResultItem key={searchResult.id} searchResult={searchResult} />
      ))}
  </S.SearchResultList>
);

export default SearchResultList;
