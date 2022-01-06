import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from '../../../../app_data/styles_info/common_styles';
import * as Individual_S from '../../style';
import {
  FORECAST_DETAILS_LABEL,
  MEASUREMENT_TYPES,
  WEATHER_ICONS_BY_GROUPS
} from '../../../../app_data/pages_info';
import { DateTime } from '../DateTime';
import { ForecastDetails } from '../../components/ForecastDetails';
import { Temperature } from '../Temperature';

TodayForecast.propTypes = {
  selectedCountry: PropTypes.shape({
    now: PropTypes.shape({
      temperature: PropTypes.number,
      symbol: PropTypes.string
    }),
    countryInfo: PropTypes.shape({
      name: PropTypes.string,
      country: PropTypes.string
    })
  }),
  weatherDetails: PropTypes.shape({
    windSpeed: PropTypes.number,
    feelsLike: PropTypes.number,
    cloudiness: PropTypes.number,
    visibility: PropTypes.number,
    pressure: PropTypes.number
  })
};

export function TodayForecast({ selectedCountry, weatherDetails }) {
  const [measurementTypes] = useState(MEASUREMENT_TYPES);
  const [forecastDetailsLabel] = useState(FORECAST_DETAILS_LABEL);
  const [weatherGroups] = useState(WEATHER_ICONS_BY_GROUPS);
  const [weatherBgImage, setBgImage] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const symbol = selectedCountry ? selectedCountry.now.symbol : '';
      for (const weather in weatherGroups) {
        weatherGroups[weather].includes(symbol) ? setBgImage(weather) : null;
      }
    }, 100);
  }, [selectedCountry]);

  const forecastDetails = weatherDetails
    ? Object.keys(weatherDetails).map(name => ({
        label: forecastDetailsLabel[name],
        value: weatherDetails[name],
        measurement: measurementTypes[name] || measurementTypes.degrees
      }))
    : null;

  return selectedCountry ? (
    <S.GridItem item xs={12} sm={6} backgroundimg={weatherBgImage} minHeight="480px" padding="0">
      <Individual_S.ContentContainer margin="0">
        <S.GridContainer container spacing={2}>
          <Temperature selectedCountry={selectedCountry} measurement={measurementTypes.degrees} />
          <DateTime />
          <ForecastDetails details={forecastDetails} />
        </S.GridContainer>
      </Individual_S.ContentContainer>
    </S.GridItem>
  ) : (
    ''
  );
}
