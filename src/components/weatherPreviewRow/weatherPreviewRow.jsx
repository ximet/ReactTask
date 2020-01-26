/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WeatherPreviewRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 150px;
  color: #A52A2A;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #A52A2A;
  cursor: pointer;
`;

const WeatherPreviewRow = ({ cityName, temperature }) => (
  <WeatherPreviewRowWrapper>
    <h3>{cityName}</h3>
    <span>{temperature} ℃</span>
  </WeatherPreviewRowWrapper>
);
  
WeatherPreviewRow.propTypes = {
  cityName: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
};

export default WeatherPreviewRow;
