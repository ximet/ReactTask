import React from 'react';

// Types
import { LocationInfo } from 'types';

// Components
import RequestDataWrapper from 'components/RequestDataWrapper/RequestDataWrapper';
import SearchResultItem from './SearchResultItem/SearchResultItem';

// Styles
import * as S from '../Search.styles';

interface SearchResultListProps {
  data: LocationInfo[] | null;
  loading?: boolean;
  error?: boolean | string | null;
  handleSearchClear: () => void;
}

const SearchResultList = ({ data, loading, error, handleSearchClear }: SearchResultListProps) => (
  <S.SearchResultList>
    <RequestDataWrapper data={data} loading={loading} error={error}>
      {data && data.length > 0 ? (
        data?.map(item => (
          <SearchResultItem key={item.id} data={item} handleSearchClear={handleSearchClear} />
        ))
      ) : (
        <span>No results found</span>
      )}
    </RequestDataWrapper>
  </S.SearchResultList>
);

export default SearchResultList;
