import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './SearchAutocompleteItem.scss';

function SearchAutocompleteItem({ cityData, setInputValue }) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/world/${cityData.id}`);
    setInputValue(cityData.name);
  };

  return (
    <li
      className="search__autocomplete-item"
      key={cityData.id}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="menuitem"
      data-id={cityData.id}
    >
      {`${cityData.name}, ${cityData.country}`}
    </li>
  );
}

SearchAutocompleteItem.propTypes = {
  cityData: PropTypes.objectOf(PropTypes.any).isRequired,
  setInputValue: PropTypes.func.isRequired,
};

export default SearchAutocompleteItem;
