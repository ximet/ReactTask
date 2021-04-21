import React from 'react';
import PropTypes from 'prop-types';

import SearchableDropdownList from './SearchableDropdownList';
import * as S from './Theme/GlobalStyles';

const SearchableDropdown = ({ places, buttonText, onClick }) => (
  <S.Dropdown>
    <S.Button type="button">{buttonText}</S.Button>
    <SearchableDropdownList places={places} onClick={onClick} />
  </S.Dropdown>
);

SearchableDropdown.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SearchableDropdown;
