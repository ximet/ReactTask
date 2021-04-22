import React from 'react';
import PropTypes from 'prop-types';
import {
  DivContainer,
  H2Name,
  DivBody,
  DivTemperature,
  DivRealTemperature,
  SpanFeelsTemperature,
  SpanWindSpeed,
  DivFooter,
  SpanText
} from './CityWeather.Styles';

function CityWeather({ city, cityName }) {
  return (
    <DivContainer>
      <H2Name>{cityName}</H2Name>
      <DivBody>
        <DivTemperature>
          <DivRealTemperature>
            <span>
              {city.temperature > 0 && '+'}
              {city.temperature}°
            </span>
          </DivRealTemperature>
          <div>
            Feels like{' '}
            <SpanFeelsTemperature>
              {city.feelsLikeTemp > 0 && '+'}
              {city.feelsLikeTemp}°
            </SpanFeelsTemperature>
          </div>
        </DivTemperature>
        {/* svg */}
        <div></div>
        <div>
          <SpanWindSpeed>{city.windSpeed}</SpanWindSpeed> km/h
        </div>
      </DivBody>
      <DivFooter>
        <SpanText>{city.symbolPhrase}</SpanText>
      </DivFooter>
    </DivContainer>
  );
}

CityWeather.propTypes = {
  city: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    feelsLikeTemp: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    symbolPhrase: PropTypes.string.isRequired
  }),
  cityName: PropTypes.string.isRequired
};

export default CityWeather;
