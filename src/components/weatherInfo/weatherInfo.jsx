import React from 'react';
import PropTypes from 'prop-types';

const WeatherInfo = ({
  cityName, weatherIcon, time, temperature,
}) => (
  <div>
    <h3>
      {cityName}
    </h3>
    <img src={weatherIcon.source} alt={weatherIcon.alt} />
    <span>
      {time.toString()}
    </span>
    <span>
      {temperature}
    </span>
  </div>
);

WeatherInfo.propTypes = {
  cityName: PropTypes.string.isRequired,
  weatherIcon: PropTypes.shape({
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  time: PropTypes.instanceOf(Date),
  temperature: PropTypes.string.isRequired,
};

export default WeatherInfo;
