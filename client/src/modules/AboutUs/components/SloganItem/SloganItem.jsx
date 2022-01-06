import React from 'react';
import PropTypes from 'prop-types';
import * as S from '../../../../app_data/styles_info/common_styles';

SloganItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
};

export function SloganItem(props) {
  return (
    <S.GridItem sm={12} md={12} item>
      <S.MuiSvgIconContainer mtop="0">{props.icon}</S.MuiSvgIconContainer>
      <div>
        <S.Title m="30px 0 14px" variant="h6" align="left">
          {props.text}
        </S.Title>
      </div>
    </S.GridItem>
  );
}

