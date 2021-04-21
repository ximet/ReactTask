import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Theme/GlobalStyles';

const SearchField = ({ placeholder, onChange, onKeyDown, value }) => (
  <S.Input
    search
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);

SearchField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default SearchField;
