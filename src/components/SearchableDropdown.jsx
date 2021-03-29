import React from 'react';
import PropTypes from 'prop-types';

import SearchableDropdownList from './SearchableDropdownList';

const SearchableDropdown = ({ places, buttonText, onClick }) => (
  <section className="dropdown">
    <button type="button" className="button">
      {buttonText}
    </button>
    <SearchableDropdownList places={places} onClick={onClick} />
  </section>
);

SearchableDropdown.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SearchableDropdown;
