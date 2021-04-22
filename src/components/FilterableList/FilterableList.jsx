import React from 'react';
import PropTypes from 'prop-types';
import { enterCityName } from '../../common/constants';
import { List, Item, SearchBox } from './FilterableList.Styles';

function FilterableList({ items, onChange, getCurrentCityData, setCurrentCityName }) {
  return (
    <List>
      <Item>
        <SearchBox type="text" onChange={onChange} placeholder={enterCityName} />
      </Item>
      {items.map(({ name, country, id }) => (
        <Item
          key={id}
          id={id}
          onClick={() => {
            getCurrentCityData(id);
            setCurrentCityName(name);
          }}
        >
          {`${name}, ${country}`}
        </Item>
      ))}
    </List>
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
