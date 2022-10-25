import React from 'react';
import { Link } from 'react-router-dom';

// Types
import { LocationInfo } from 'types';

// Styles
import * as S from '../../Search.styles';

interface SearchResultItemProps {
  data: LocationInfo;
  handleSearchClear: () => void;
}

const SearchResultItem = ({ data, handleSearchClear }: SearchResultItemProps) => {
  const { id, name, state, country } = data;

  return (
    <S.SearchResultItem>
      <Link to={`/locations/${id}`} onClick={handleSearchClear}>{`${name}, ${
        state ? `${state},` : ''
      } ${country}`}</Link>
    </S.SearchResultItem>
  );
};

export default SearchResultItem;
