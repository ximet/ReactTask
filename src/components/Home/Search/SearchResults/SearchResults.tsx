import React, { SetStateAction, useContext } from 'react';
import { LocationSearch } from '../../../../helpers/Interfaces';
import { LocationContext } from '../../../../store/location-context';
import { ThemeContext, ThemeContextConfig } from '../../../../store/theme-context';
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
  const { setLocationId } = useContext(LocationContext);

  return (
    <ul className={`${styles.container} ${styles[theme]}`}>
      {locations.slice(0, 10).map(({ id, name, adminArea, country }) => (
        <div className={styles.list}>
          <li
            className={styles.li}
            key={id}
            onClick={() => {
              setLocationId(id.toString());
              setSearchTerm('');
              setDisplaySearchResults(false);
            }}
          >
            {name}, {adminArea && `${adminArea},`} {country}
          </li>
        </div>
      ))}
    </ul>
  );
};
export default SearchResults;
