import React from 'react';
import PropTypes from 'prop-types';
import * as S from './SearchInput.styles';

const SearchInput = ({ placeholder, value, onChange }) => {
  return (
    <div>
      <S.InputWrapper>
        <input type="search" placeholder={placeholder} value={value} onChange={onChange} />
      </S.InputWrapper>
    </div>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchInput;
