import React from 'react';
import PropTypes from 'prop-types';

import SearchableDropdownList from './SearchableDropdownList';

const SearchableDropdown = ({ places, buttonText, handleListItemClick }) => (
  <section className="dropdown">
    <button
      type="button"
      className="button">
      {buttonText}
    </button>
    <SearchableDropdownList places={places} handleListItemClick={handleListItemClick} />
  </section>
);

SearchableDropdown.propTypes = {
  places: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string,
  handleListItemClick: PropTypes.func,
};

export default SearchableDropdown;
