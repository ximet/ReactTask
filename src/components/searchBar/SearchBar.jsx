import React from 'react';
import PropTypes from 'prop-types';
import * as S from './SearchBar.styles';

const SearchBar = ({ results, onClick }) => {
  return (
    <S.ResultWrapper>
      {results.map(result => (
        <S.ResultItems key={result.id} onClick={() => onClick(result)}>
          <span>{`${result.name}, ${result.country}`}</span>
        </S.ResultItems>
      ))}
    </S.ResultWrapper>
  );
};

SearchBar.defaultProps = {
  results: []
};

SearchBar.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired
    })
  ),
  onClick: PropTypes.func
};

export default SearchBar;
