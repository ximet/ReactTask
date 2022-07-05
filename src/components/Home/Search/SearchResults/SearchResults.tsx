import React, { SetStateAction, useContext } from 'react';
import { LocationSearch } from '../../../../helpers/Interfaces';
import { LocationContext } from '../../../../store/location-context';
import styles from './SearchResults.module.scss';
import { useState } from 'react';

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
  const { locations } = searchResults;
  const { setLocationId } = useContext(LocationContext);

  return (
    <ul className={styles.container}>
      {locations.slice(0, 10).map(location => (
        <div className={styles.list}>
          <li
            className={styles.li}
            key={location.id}
            onClick={() => {
              setLocationId(location.id.toString());
              setSearchTerm('');
              setDisplaySearchResults(false);
            }}
          >
            {location.name}, {location.adminArea && `${location.adminArea},`} {location.country}
          </li>
        </div>
      ))}
    </ul>
  );
};
export default SearchResults;
