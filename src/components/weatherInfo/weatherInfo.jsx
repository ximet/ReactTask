/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WeatherInfoScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #A52A2A;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #A52A2A;
`;

const WeatherInfo = ({
  cityName, temperature, country, description,
}) => (
  <WeatherInfoScreen>
    <h3>
      {cityName} {country}
    </h3>
    <span>
      {temperature} ℃
    </span>
    <span>
      { description }
    </span>
  </WeatherInfoScreen>
);

WeatherInfo.propTypes = {
  cityName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default WeatherInfo;
