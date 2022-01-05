import React from 'react';
import PropTypes from 'prop-types';
import * as S from '../../../../app_data/styles_info/common_styles';

import { DailyForecast } from '../../containers/DailyForecast';
import { TodayForecast } from '../../containers/TodayForecast';

Country.propTypes = {
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

export function Country(props) {
  return (
    <S.GridContainer container>
      <TodayForecast {...props} />
      <DailyForecast {...props} />
    </S.GridContainer>
  );
}
