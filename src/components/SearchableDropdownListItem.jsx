import React from 'react';
import PropTypes from 'prop-types';

const SearchableDropdownListItem = ({ place, handleListItemClick }) => (
  <a
    className="dropdown__list__item"
    onClick={handleListItemClick}
    onKeyDown={handleListItemClick}
    tabIndex={0}
    role="button">
    {place}
  </a>
);

SearchableDropdownListItem.propTypes = {
  place: PropTypes.string,
  handleListItemClick: PropTypes.func,
};

export default SearchableDropdownListItem;
