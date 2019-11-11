import React from 'react';
import PropTypes from 'prop-types';
import List from 'Components/UI/List';
import WeatherListItem from './WeatherListItem';

const WeatherList = (props) => {
  const convertList = (items) => {
    const weathers = [];

    items.map(item => {
      weathers.push({
        id: item.id,
        content: <WeatherListItem location={item.location} />,
      });
    });
    return weathers;
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
