import React from 'react';
import PropTypes from 'prop-types';
import SloganItem from '../SloganItem';
import * as S from '../../../../app_data/styles_info/common_styles';

Slogan.propTypes = {
  slogan: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      iconName: PropTypes.object.isRequired
    })
  )
};

export function Slogan(props) {
  return (
    <S.GridItem sm={4} md={4} item>
      {props.slogan.map(sloganItem => (
        <SloganItem key={sloganItem.text} text={sloganItem.text} icon={sloganItem.iconName} />
      ))}
    </S.GridItem>
  );
}
