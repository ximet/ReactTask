import React from 'react';
import PropTypes from 'prop-types';

import SearchableDropdownList from './SearchableDropdownList';
import * as Styled from '../styles/globalStyles';

const SearchableDropdown = ({ places, buttonText, onClick }) => (
  <Styled.Dropdown>
    <Styled.Button type="button">{buttonText}</Styled.Button>
    <SearchableDropdownList places={places} onClick={onClick} />
  </Styled.Dropdown>
);

SearchableDropdown.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SearchableDropdown;
