import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from '../styles/globalStyles';

const SearchField = ({ placeholder, onChange, onKeyDown, value }) => (
  <Styled.Input
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
