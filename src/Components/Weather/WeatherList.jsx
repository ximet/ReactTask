import React from 'react';
import PropTypes from 'prop-types';
import List from 'Components/UI/List';
import WeatherListItem from './WeatherListItem';

const WeatherList = (props) => {
  const convertList = (items) => {
    return items.map(({id, location}) => {
      return {
        id,
        content: <WeatherListItem location={location} />
      }
    });
  };

  return (
    <List items={convertList(props.items)} />
  );
};

WeatherList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.instanseOf(WeatherListItem),
  })).isRequired,
};

export default WeatherList;
