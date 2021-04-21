import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import SearchField from './SearchField';
import Link from './Link';
import * as S from './Theme/GlobalStyles';

const SearchableDropdownList = ({ places, onClick }) => {
  const [searchWord, setSearchWord] = useState('');

  const matchedPlaces = useMemo(() => places.filter(({ name }) => name.includes(searchWord)), [
    searchWord
  ]);

  return (
    <S.List>
      <SearchField
        placeholder="Search..."
        onChange={({ target: { value } }) => setSearchWord(value)}
        value={searchWord}
      />
      {matchedPlaces.map(place => (
        <Link place={place.name} key={place.id} id={place.id} onClick={onClick} />
      ))}
    </S.List>
  );
};

SearchableDropdownList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired
};

export default SearchableDropdownList;
