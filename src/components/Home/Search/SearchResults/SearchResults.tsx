import React, { useContext } from 'react';
import { LocationSearch } from '../../../../helpers/Interfaces';
import { LocationContext } from '../../../../store/location-context';

interface SearchResultsProps {
  searchResults: LocationSearch;
}

const SearchResults: React.FunctionComponent<SearchResultsProps> = ({ searchResults }) => {
  const { locations } = searchResults;
  const { setLocationId } = useContext(LocationContext);

  return (
    <ul>
      {locations.slice(0, 5).map(location => (
        <li key={location.id} onClick={() => setLocationId(location.id.toString())}>
          {location.name}, {location.adminArea && `${location.adminArea},`} {location.country}
        </li>
      ))}
    </ul>
  );
};
export default SearchResults;
