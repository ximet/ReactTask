import React from 'react';
import { LocationSearch } from '../../../../helpers/Interfaces';

interface SearchResultsProps {
  searchResults: LocationSearch;
  setLocationId: React.Dispatch<React.SetStateAction<string | null>>
}

const SearchResults: React.FunctionComponent<SearchResultsProps> = ({ searchResults, setLocationId }) => {
  const { locations } = searchResults;


  return (
    <>
      <ul>
        {locations.slice(0, 5).map(location => (
          <li key={location.id} onClick={() => setLocationId(location.id.toString())}>
            {location.name}, {location.adminArea && `${location.adminArea},`} {location.country}
          </li>
        ))}
      </ul>
    </>
  );
};
export default SearchResults;
