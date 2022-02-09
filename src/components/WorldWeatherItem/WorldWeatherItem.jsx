import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './WorldWeatherItem.scss';

function WorldWeatherItem({ cityData }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(cityData.name.replaceAll(' ', '_'));
  };

  return (
    <div className="world__card">
      <div className="world__card-title">
        <div className="world__card-title-text">{`${cityData.name}, ${cityData.country}`}</div>
        <button className="world__card-title-button" onClick={handleClick} type="button">Show weather &#8594;</button>
      </div>
    </div>
  );
}

WorldWeatherItem.propTypes = { cityData: PropTypes.objectOf(PropTypes.any).isRequired };

export default WorldWeatherItem;
