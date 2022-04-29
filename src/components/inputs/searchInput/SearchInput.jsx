import React from 'react';
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

export default SearchInput;
