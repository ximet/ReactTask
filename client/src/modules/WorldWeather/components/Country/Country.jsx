import React from 'react';
import PropTypes from 'prop-types';
import * as Individual_S from '../../style';
import * as S from '../../../../app_data/styles_info/common_styles';
import ThermostatSharpIcon from '@mui/icons-material/ThermostatSharp';

Country.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
};

export function Country(props) {
  return (
    <S.GridItem item xs={12} sm={6} md={3} width={'25%'}>
      <Individual_S.CustomWeatherContainer>
        <Individual_S.CustomWeatherContainer>
          <S.MuiSvgIconContainer mtop={'0'}>{props.icon || <ThermostatSharpIcon />}</S.MuiSvgIconContainer>
          <span>{props.temperature || 18 }</span>
        </Individual_S.CustomWeatherContainer>
        <Individual_S.CustomWeatherContainer m={'0 0 0 15px'}>
          <span>
            {/*{props.name}, {props.country}*/}
            {props.name},

          </span>
        </Individual_S.CustomWeatherContainer>
      </Individual_S.CustomWeatherContainer>
    </S.GridItem>
  );
}
