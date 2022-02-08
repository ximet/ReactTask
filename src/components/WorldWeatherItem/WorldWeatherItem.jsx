import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import CurrentWeatherItem from '../CurrentWeatherItem/CurrentWeatherItem';

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
        <button className="world__card-title-button" onClick={handleClick} type="button">More details &#8594;</button>
      </div>
      <div className="world__card-content">
        <img className="world__card-img" src={`https://developer.foreca.com/static/images/symbols/${cityData.symbol}.png`} alt="weather" />
        <CurrentWeatherItem name="Wind speed" data={`${cityData.windSpeed} mph`} />
        <CurrentWeatherItem name="Cloudiness" data={`${cityData.cloudiness}%`} />
        <CurrentWeatherItem name="Pressure" data={`${Math.round(cityData.pressure)} hPa`} />
        <CurrentWeatherItem name="Visibility" data={`${cityData.visibility} m`} />
        <CurrentWeatherItem name="Humidity" data={`${cityData.relHumidity}%`} />
        <CurrentWeatherItem name="Wind gust" data={`${cityData.windGust} m/s`} />
      </div>
    </div>
  );
}

WorldWeatherItem.propTypes = { cityData: PropTypes.objectOf(PropTypes.any).isRequired };

export default WorldWeatherItem;
