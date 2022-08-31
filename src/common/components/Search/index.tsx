import React, { FunctionComponent, useState, useRef, ChangeEvent } from 'react';

// Store
import { useSearchLocationsQuery } from '../../../services/forecaApi';
import { useAppSelector } from '../../../app/hooks';

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
  const { data: searchResults } = useSearchLocationsQuery(debouncedSearchQuery, {
    skip: debouncedSearchQuery === ''
  });
  const { theme } = useAppSelector(state => state.theme);

  const searchRef = useRef<HTMLDivElement>(null);

  // Handlers
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchQuery(e.currentTarget.value);
  };
  const handleInputFocus = () => setListShown(true);
  const handleClickOutside = () => setListShown(false);

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
      {searchResults && listShown && (
        <SearchResultList searchResults={searchResults && searchResults.locations} />
      )}
    </S.Search>
  );
};

export default Search;
