import React, { SetStateAction, useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dispatch } from 'redux';
import { LocationSearch } from '../../../../helpers/Interfaces';
import { CombinedState } from '../../../../store/index-redux';
import {
  LocationActionConfig,
  LocationActions,
  LocationState
} from '../../../../store/location-redux';
import { Theme, ThemeContext, ThemeContextConfig } from '../../../../store/theme-context';
import GoLocation from '../../../UI/Icons/GoLocation';

import SavedLocations from './SavedLocations/SavedLocations';
import styles from './SearchResults.module.scss';

interface SearchResultsProps {
  searchResults: LocationSearch;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
  setDisplaySearchResults: React.Dispatch<SetStateAction<boolean>>;
}

const SearchResults: React.FunctionComponent<SearchResultsProps> = ({
  searchResults,
  setSearchTerm,
  setDisplaySearchResults
}) => {
  const { theme }: ThemeContextConfig = useContext(ThemeContext);
  const { locations } = searchResults;
  const { currentLocation, prevSearches } = useSelector<CombinedState, LocationState>(
    state => state.location
  );
  const dispatch: Dispatch<LocationActionConfig> = useDispatch();
  const navigate = useNavigate();

  const clickHandler = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      console.log('click');
      const target = event.target as HTMLDivElement;
      setSearchTerm('');
      setDisplaySearchResults(false);
      if (target.id !== currentLocation) {
        dispatch({ type: LocationActions.SAVE_SEARCH, payload: target.id });
      }
      navigate(`/cities/${target.id}`);
    },
    [event]
  );

  return (
    <ul className={`${styles.container} ${theme === Theme.DARK && styles[theme]}`}>
      {locations.slice(0, 10).map(({ id, name, adminArea, country }) => (
        <li className={styles.listElement} key={id}>
          <div className={styles.locationName} id={id.toString()} onMouseDown={clickHandler}>
            {name}, {adminArea && `${adminArea},`} {country}
          </div>
        </li>
      ))}
      <li className={styles.listElement}>
        <div
          className={`${styles.locationName} ${styles.liCurrent}`}
          key={currentLocation}
          id={currentLocation}
          onMouseDown={clickHandler}
        >
          <GoLocation />
          <b>Current location</b>
        </div>
      </li>
      <li key={Math.random()}>
        <div className={styles.previousLabel}>
          <b>Previous searches:</b>
        </div>
      </li>
      {prevSearches.map(savedSearch => (
        <SavedLocations clickHandler={clickHandler} savedSearch={savedSearch} />
      ))}
    </ul>
  );
};
export default SearchResults;
