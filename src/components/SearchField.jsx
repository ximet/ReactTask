import React from 'react';
import PropTypes from 'prop-types';

const SearchField = ({ placeholder, onChange, onKeyDown, value }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    className="input__search"
  />
);

SearchField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  value: PropTypes.string.isRequired
};

export default SearchField;
