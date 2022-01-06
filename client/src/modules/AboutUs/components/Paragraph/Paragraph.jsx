import React from 'react';
import PropTypes from 'prop-types';
import * as S from '../../../../app_data/styles_info/common_styles';

Paragraph.propTypes = {
  paragraphText: PropTypes.string.isRequired
};

export function Paragraph(props) {
  return (
    <S.GridItem sm={8} md={8} item>
      <S.Paragraph component={'p'} m="0 0 10px 8px" align="justify">
        {props.paragraphText}
      </S.Paragraph>
    </S.GridItem>
  );
}
