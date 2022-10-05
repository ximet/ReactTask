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
import { selectTheme } from 'redux/reducers/global';

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
  const theme = useAppSelector(selectTheme);
  const { data, loading, error } = useAppSelector(state => state.location.search);

  const searchRef = useRef<HTMLDivElement>(null);

  const { pathname } = useLocation();
  const dispatch = useDispatch();

  // Handlers
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setSearchQuery(e.currentTarget.value);
  };
  const handleInputFocus = (): void => setListShown(true);
  const handleSearchClose = (): void => setListShown(false);
  const handleSearchLocations = useCallback(() => {
    if (debouncedSearchQuery) dispatch(searchLocations(debouncedSearchQuery));
  }, [dispatch, debouncedSearchQuery]);

  useOnClickOutside(searchRef, handleSearchClose);

  // Get data
  useEffect(() => {
    handleSearchLocations();
  }, [handleSearchLocations]);

  // Close search modal on route change
  useEffect(() => {
    handleSearchClose();
  }, [pathname]);

  return (
    <S.Search ref={searchRef} themeType={theme}>
      <IconSearch />
      <Input
        inputType="input"
        inputConfig={{ type: 'search', placeholder: 'Search city...' }}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        clearEnabled
      />
      {data && listShown && <SearchResultList data={data} loading={loading} error={error} />}
    </S.Search>
  );
};

export default Search;
