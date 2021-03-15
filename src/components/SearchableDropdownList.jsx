import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import SearchField from './SearchField';
import SearchableDropdownListItem from './SearchableDropdownListItem';

const SearchableDropdownList = ({ places, handleListItemClick }) => {
  const [filteredSearches, setFilteredSearches] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    setFilteredSearches(places);
  }, [places]);
  
  const handleChange = (e) => {
    setSearchWord(e.target.value);

    const currentFiltered = places.filter((place) => place.includes(e.target.value));
    setFilteredSearches(currentFiltered);
  };

  return (
    <div className="dropdown__list">
      <SearchField
        placeholder="Search..."
        handleChange={handleChange}
        value={searchWord} />
      {filteredSearches.map((place) => (
        <SearchableDropdownListItem
        place={place}
        key={place}
        handleListItemClick={handleListItemClick} />
      ))}
    </div>
  );
};

SearchableDropdownList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.string),
  handleListItemClick: PropTypes.func,
};

export default SearchableDropdownList;
