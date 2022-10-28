import React from 'react';
import { getLocationCountry, getLocationName } from 'utils/getCoordsFromString';
import styles from './SearchSavedLocation.module.scss';

interface SavedLocationsProps {
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  savedSearch: string;
}
const SearchSavedLocations: React.FunctionComponent<SavedLocationsProps> = ({
  onClick,
  savedSearch
}) => {
  return (
    <div>
      {savedSearch && (
        <li className={styles.listElement}>
          <a href={savedSearch} className={styles.locationName} onMouseDown={onClick}>
            {getLocationName(savedSearch)}, {getLocationCountry(savedSearch)}
          </a>
        </li>
      )}
    </div>
  );
};

export default SearchSavedLocations;
