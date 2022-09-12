import React from 'react';

// Types
import { LocationInfo } from 'types';

// Styles
import * as S from '../../Search.styles';

interface SearchResultItemProps {
  data: LocationInfo;
}

const SearchResultItem = ({ data }: SearchResultItemProps) => {
  const { name, state, country } = data;

  return (
    <S.SearchResultItem>{`${name}, ${state ? `${state},` : ''} ${country}`}</S.SearchResultItem>
  );
};

export default SearchResultItem;
