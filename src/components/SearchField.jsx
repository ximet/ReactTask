import React from 'react';
import PropTypes from 'prop-types';

const SearchField = ({
  placeholder,
  handleChange,
  handleKeydown,
  value,
}) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={handleChange}
    onKeyDown={handleKeydown}
    className="input__search" />
);

SearchField.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  handleKeydown: PropTypes.func,
  value: PropTypes.string,
};

export default SearchField;
