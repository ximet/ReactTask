import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './SearchAutocompleteItem.scss';

function SearchAutocompleteItem({ cityData, setInputValue }) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/${cityData.id}`);
    setInputValue('');
  };

  const handleKeyUp = ({ key }) => {
    if (key === 'Enter') {
      handleClick();
    }
  };

  return (
    <li
      className="search__autocomplete-item"
      key={cityData.id}
      onClick={handleClick}
      onKeyDown={handleKeyUp}
      role="menuitem"
      tabIndex={0}
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
