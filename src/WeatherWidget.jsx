import React from 'react';
import PropTypes from 'prop-types';

const WeatherWidget = ({
  description,
  temperature,
  pressure,
  humidity,
  windSpeed,
  iconUrl,
  time,
  name,
}) => (
  <div
    style={{
      display: 'grid',
      gridGap: '1rem',
      margin: '1rem',
      justifyContent: 'center',
      fontSize: '1.5rem',
    }}
  >
    <div>
      <div>{time}</div>
      <div>{name}</div>
    </div>
    <div
      style={{ display: 'grid', gridGap: '1rem', gridAutoFlow: 'column', justifyContent: 'start' }}
    >
      <img src={iconUrl} alt="картинка погоды" />
      <div>
        <div>{`${Math.floor(temperature - 273)} °C ${description}`}</div>
        <div>{`Pressure: ${pressure * 100} Pa`}</div>
        <div>{`Humidity: ${humidity} %`}</div>
        <div>{`Wind: ${windSpeed} km/h`}</div>
      </div>
    </div>
  </div>
);

WeatherWidget.propTypes = {
  temperature: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  iconUrl: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WeatherWidget;
