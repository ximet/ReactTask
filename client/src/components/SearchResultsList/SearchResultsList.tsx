import { Loader } from 'components/Loader/Loader';
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
  const { prevSearches } = useSelector(prevSearchSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const debouncedInputValue: string = useDebounce(inputValue);
  const { searchData, isLoading } = useGetSearchRequest(debouncedInputValue);

  const clickHandler = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const target = event.target as HTMLDivElement;
      resultSelected();
      const urlLocationName = formatNameForUrl(`${target.dataset.name}-${target.dataset.country}`);
      navigate(`/details/${urlLocationName}`);
      dispatch({ type: SEARCH_SAVE_LOCATION, payload: target.dataset.name });
    },
    [dispatch, navigate, resultSelected]
  );

  if (!display) return <> </>;

  return (
    <ul className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
      {isLoading ? (
        <Loader />
      ) : (
        searchData?.locations.slice(0, 10).map(({ lon, lat, id, name, country }) => {
          console.log('lon', lon, lat);
          return (
            <li className={styles.listElement} key={id}>
              <div
                className={styles.locationName}
                id={id.toString()}
                onMouseDown={clickHandler}
                data-name={name}
                data-country={country}
              >
                {name}, {country}
              </div>
            </li>
          );
        })
      )}
      <li>
        <div className={styles.previousSearches}>
          <b>Previous searches:</b>
        </div>
      </li>
      {prevSearches?.map(savedSearch => {
        return <SearchSavedLocations clickHandler={clickHandler} savedSearch={savedSearch} />;
      })}
    </ul>
  );
};

export default SearchResultslist;
