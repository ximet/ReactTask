import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import SearchField from './SearchField';
import Link from './Link';

const SearchableDropdownList = ({ places, onClick }) => {
  const [searchWord, setSearchWord] = useState('');

  const memoizedSearch = useMemo(() => (
    places.filter(({ name }) => name.includes(searchWord))
  ), [searchWord]);

  return (
    <div className="dropdown__list">
      <SearchField
        placeholder="Search..."
        onChange={({ target: { value } }) => setSearchWord(value)}
        value={searchWord} />
      {memoizedSearch.map((place) => (
        <Link
          place={place.name}
          key={place.id}
          onClick={onClick} />
      ))}
    </div>
  );
};

SearchableDropdownList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func,
};

export default SearchableDropdownList;
