import { Loader, LoaderStyles } from 'components/Loader/Loader';
import SearchSavedLocations from 'components/SearchSavedLocations/SearchSavedLocations';
import DarkLightThemeContext from 'contexts/ThemeContext';
import { useDebounce } from 'hooks/useDebounce';
import useGetSearchRequest from 'hooks/useGetSearchRequest';
import React, { useContext, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { prevSearchSelector, SEARCH_SAVE_LOCATION } from 'redux/searchReducer';
import { formatNameForUrl } from 'utils/stringCorrections';
import styles from './SearchResultsList.module.scss';

const SearchResultslist = ({ inputValue, display, resultSelected }) => {
  const { darkMode } = useContext(DarkLightThemeContext);
  const prevSearches = useSelector(prevSearchSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const debouncedInputValue: string = useDebounce(inputValue);
  const { searchData, isLoading, setSearchData } = useGetSearchRequest(debouncedInputValue);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const target = event.target as HTMLDivElement;
      resultSelected();
      const urlLocationName = formatNameForUrl(
        `${target.dataset.name}(${target.dataset.lon})-(${target.dataset.lat})`
      );
      navigate(`/details/${urlLocationName}`);
      dispatch({ type: SEARCH_SAVE_LOCATION, payload: urlLocationName });
      setSearchData(undefined);
    },
    [dispatch, navigate, resultSelected, setSearchData]
  );

  if (!display) return <> </>;

  return (
    <ul className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
      {isLoading ? (
        <Loader className={LoaderStyles.search} />
      ) : (
        searchData?.locations.slice(0, 10).map(({ lon, lat, id, name, country }) => {
          return (
            <li className={styles.listElement} key={id}>
              <div
                className={styles.locationName}
                id={id.toString()}
                onMouseDown={handleClick}
                data-lon={lon}
                data-lat={lat}
                data-name={`${name}-${country}`}
              >
                {name}, {country}
              </div>
            </li>
          );
        })
      )}
      <li>
        <div className={styles.previousSearches}>Previous searches:</div>
        <hr />
      </li>
      {prevSearches?.map(savedSearch => {
        return (
          <SearchSavedLocations onClick={handleClick} savedSearch={savedSearch} key={savedSearch} />
        );
      })}
      {!prevSearches.length && (
        <li className={styles.listElement}>
          <div className={styles.locationName}>No saved locations</div>
        </li>
      )}
    </ul>
  );
};

export default SearchResultslist;
