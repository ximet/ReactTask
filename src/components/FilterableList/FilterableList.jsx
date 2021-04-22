import React from 'react';
import PropTypes from 'prop-types';
import { enterCityName } from '../../common/constants';
import { StyledUl, StyledLi, StyledInput } from './FilterableList.Styles';

function FilterableList({ items, onChange, getCurrentCityData, setCurrentCityName }) {
  return (
    <StyledUl>
      <StyledLi>
        <StyledInput type="text" onChange={onChange} placeholder={enterCityName} />
      </StyledLi>
      {items.map(({ name, country, id }) => (
        <StyledLi
          key={id}
          id={id}
          onClick={() => {
            getCurrentCityData(id);
            setCurrentCityName(name);
          }}
        >
          {`${name}, ${country}`}
        </StyledLi>
      ))}
    </StyledUl>
  );
}

FilterableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
  onChange: PropTypes.func.isRequired,
  getCurrentCityData: PropTypes.func.isRequired,
  setCurrentCityName: PropTypes.func.isRequired
};

export default FilterableList;
