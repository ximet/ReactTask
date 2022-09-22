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
}

const SearchResultList = ({ data, loading, error }: SearchResultListProps) => (
  <S.SearchResultList>
    <RequestDataWrapper data={data} loading={loading} error={error}>
      {data?.map(item => (
        <SearchResultItem key={item.id} data={item} />
      ))}
    </RequestDataWrapper>
  </S.SearchResultList>
);

export default SearchResultList;
