import React, {
  FunctionComponent,
  useEffect,
  useState,
  useRef,
  useCallback,
  ChangeEvent
} from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Store
import { useAppSelector } from 'redux/hooks';
import { searchLocations } from 'redux/actionCreators/location';

// Custom hooks
import useDebounce from 'hooks/useDebounce';
import useOnClickOutside from 'hooks/useOnClickOutside';

// Assets
import { IconSearch } from 'assets/images/svg';

// Components
import Input from '../Input/Input';
import SearchResultList from './SearchResultList/SearchResultList';

// Styles
import * as S from './Search.styles';

const Search: FunctionComponent = () => {
  // State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [listShown, setListShown] = useState<boolean>(true);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const theme = useAppSelector(state => state.theme);
  const { data, loading, error } = useAppSelector(state => state.location.search);

  const searchRef = useRef<HTMLDivElement>(null);

  const { pathname } = useLocation();
  const dispatch = useDispatch();

  // Handlers
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setSearchQuery(e.currentTarget.value);
  };
  const handleInputFocus = (): void => setListShown(true);
  const handleClickOutside = (): void => setListShown(false);
  const handleSearchLocations = useCallback(() => {
    if (debouncedSearchQuery) dispatch(searchLocations(debouncedSearchQuery));
  }, [dispatch, debouncedSearchQuery]);

  useOnClickOutside(searchRef, handleClickOutside);

  // Get data
  useEffect(() => {
    handleSearchLocations();
  }, [handleSearchLocations]);

  // Close search modal on route change
  useEffect(() => {
    setListShown(false);
  }, [pathname]);

  return (
    <S.Search ref={searchRef} themeType={theme}>
      <IconSearch />
      <Input
        type="search"
        placeholder="Search city..."
        inputElement="input"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      {data && listShown && <SearchResultList data={data} loading={loading} error={error} />}
    </S.Search>
  );
};

export default Search;
