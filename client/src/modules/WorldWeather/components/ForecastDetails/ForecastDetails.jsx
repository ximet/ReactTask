import React from 'react';
import * as Individual_S from '../../style';
import * as S from '../../../../app_data/styles_info/common_styles';
import PropTypes from 'prop-types';

ForecastDetails.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string,
      measurement: PropTypes.string
    })
  )
};
export function ForecastDetails({ details }) {
  return (
    <S.GridItem item xs={12} sm={10} m={10} margin="80px 0 0 0" marginLeft="auto">
      <Individual_S.ForecastList>
        {details
          ? details.map(detail => {
              return (
                <Individual_S.WeatherDetail
                  key={detail.label}
                  secondaryAction={
                    <S.Title>
                      {detail.value} {detail.measurement}
                    </S.Title>
                  }
                >
                  <Individual_S.ForecastListItemText
                    special_color={'true'}
                    regular={'400'}
                    primary={`${detail.label}`}
                  />
                </Individual_S.WeatherDetail>
              );
            })
          : {}}
      </Individual_S.ForecastList>
    </S.GridItem>
  );
}
