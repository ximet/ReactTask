import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from '../../../../app_data/styles_info/common_styles';
import * as Individual_S from '../../style';
import { Tooltip } from '@mui/material';
import { MEASUREMENT_TYPES, WEATHER_ICON_TOOLTIPS } from '../../../../app_data/pages_info';
import { BASE_URL_ICONS } from '../../../../weatherAPI/api_info';
import moment from 'moment';

DailyForecast.propTypes = {
  daily: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string,
      date: PropTypes.string,
      minTemp: PropTypes.number
    })
  )
};

export function DailyForecast({ selectedCountry }) {
  const [iconBaseUrl] = useState(BASE_URL_ICONS);
  const [weatherIconTooltip] = useState(WEATHER_ICON_TOOLTIPS);
  const [measurementTypes] = useState(MEASUREMENT_TYPES);

  const forecast = selectedCountry
    ? selectedCountry.daily.map((dayForecast, i) => {
        const day = moment(dayForecast.date).format('ddd');
        return (
          <Individual_S.ForecastListItem key={i}>
            <Individual_S.ForecastListItemText
              primary={`${dayForecast.minTemp}${measurementTypes.degrees}`}
              secondary={day}
            />
            <Individual_S.ForecastListIconWrapper>
              <Tooltip title={weatherIconTooltip[dayForecast.symbol]} arrow>
                <img src={`${iconBaseUrl}${dayForecast.symbol}.png`} alt="" />
              </Tooltip>
            </Individual_S.ForecastListIconWrapper>
          </Individual_S.ForecastListItem>
        );
      })
    : '';

  return (
    <S.GridItem item xs={12} sm={6} minHeight="480px" padding="0">
      <Individual_S.TopBar>
        <span className="weather">WEATHER</span> | <span className="forecast">FORECAST</span>
      </Individual_S.TopBar>
      <Individual_S.ListTittle>DAILY</Individual_S.ListTittle>
      <Individual_S.ForecastList>{forecast}</Individual_S.ForecastList>
    </S.GridItem>
  );
}
