import React from 'react';
import PropTypes from 'prop-types';

const WeatherWidget = ({
  weather: { description, temperature, pressure, humidity, windSpeed, iconUrl, time, name },
}) => {
  return (
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
        style={{
          display: 'grid',
          gridGap: '1rem',
          gridAutoFlow: 'column',
          justifyContent: 'start',
        }}
      >
        <img width={100} height={100} src={iconUrl} alt="картинка погоды" />
        <div>
          <div>{`${temperature} °C ${description}`}</div>
          <div>{`Pressure: ${pressure} Pa`}</div>
          <div>{`Humidity: ${humidity} %`}</div>
          <div>{`Wind: ${windSpeed} km/h`}</div>
        </div>
      </div>
    </div>
  );
};

WeatherWidget.propTypes = {
  weather: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    iconUrl: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default WeatherWidget;
