import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Individual_S from '../../style';
import { Tooltip } from '@mui/material';
import * as S from '../../../../app_data/styles_info/common_styles';
import { WEATHER_ICON_TOOLTIPS } from '../../../../app_data/pages_info';
import { BASE_URL_ICONS } from '../../../../weatherAPI/api_info';

Temperature.propTypes = {
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
  measurement: PropTypes.string
};

export function Temperature(props) {
  const { now, countryInfo } = props.selectedCountry;
  const measurementType = props.measurement;
  const [weatherIconTooltips] = useState(WEATHER_ICON_TOOLTIPS);
  const [iconBaseUrl] = useState(BASE_URL_ICONS);

  return (
    <S.GridItem item xs={12} sm={6} m={7} margin="0" padding="0" minHeight="130px">
      <Individual_S.TempContainer>
        {now.temperature}
        <span className="degrees">{measurementType}</span>
        <Tooltip title={weatherIconTooltips[now.symbol]} arrow>
          <Individual_S.WeatherIcon src={`${iconBaseUrl}${now.symbol}.png`} alt="Weather icon" />
        </Tooltip>
        <p className="city-state">
          {countryInfo.name}, {countryInfo.country}
        </p>
      </Individual_S.TempContainer>
    </S.GridItem>
  );
}
