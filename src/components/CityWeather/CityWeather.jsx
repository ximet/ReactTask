import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  ContainerBody,
  Temperature,
  RealTemperature,
  FeelsTemperature,
  WindSpeed,
  Footer,
  WeatherPhrase
} from './CityWeather.Styles';

function CityWeather({ city, cityName }) {
  return (
    <Container>
      <Title>{cityName}</Title>
      <ContainerBody>
        <Temperature>
          <RealTemperature>
            <span>
              {city.temperature > 0 && '+'}
              {city.temperature}°
            </span>
          </RealTemperature>
          <div>
            Feels like{' '}
            <FeelsTemperature>
              {city.feelsLikeTemp > 0 && '+'}
              {city.feelsLikeTemp}°
            </FeelsTemperature>
          </div>
        </Temperature>
        {/* svg */}
        <div>
          <WindSpeed>{city.windSpeed}</WindSpeed> km/h
        </div>
      </ContainerBody>
      <Footer>
        <WeatherPhrase>{city.symbolPhrase}</WeatherPhrase>
      </Footer>
    </Container>
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
