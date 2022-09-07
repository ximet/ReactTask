import React, { FunctionComponent, useState, useRef, ChangeEvent } from 'react';

// Store
import { useAppSelector } from '../../../app/hooks';

// API
import { useSearchLocationsQuery } from '../../../services/forecaApi';

// Custom hooks
import useDebounce from '../../hooks/useDebounce';
import useOnClickOutside from '../../hooks/useOnClickOutside';

// Components
import Input from '../Input';
import SearchResultList from './SearchResultList';

// Styles
import * as S from './styles';

// Assets
import { IconSearch } from '../../assets/images/svg';

const Search: FunctionComponent = () => {
  // State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [listShown, setListShown] = useState<boolean>(true);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const { data } = useSearchLocationsQuery(debouncedSearchQuery, {
    skip: debouncedSearchQuery === ''
  });
  const { theme } = useAppSelector(state => state.theme);

  const searchRef = useRef<HTMLDivElement>(null);

  // Handlers
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setSearchQuery(e.currentTarget.value);
  };
  const handleInputFocus = (): void => setListShown(true);
  const handleClickOutside = (): void => setListShown(false);

  useOnClickOutside(searchRef, handleClickOutside);

  return (
    <S.Search ref={searchRef} theme={theme}>
      <IconSearch />
      <Input
        type="search"
        placeholder="Search city..."
        inputElement="input"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      {data && listShown && <SearchResultList data={data && data.locations} />}
    </S.Search>
  );
};

export default Search;
