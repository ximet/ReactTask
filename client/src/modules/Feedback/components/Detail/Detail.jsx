import React from 'react';
import * as Individual_S from '../../style';
import * as S from '../../../../app_data/styles_info/common_styles';

import { FEEDBACK_TEXT } from '../../../../app_data/styles_info';
import PropTypes from 'prop-types';

export default function Detail(props) {
  return (
    <Individual_S.DetailsContainer>
      <S.MuiSvgIconContainer>{props.icon}</S.MuiSvgIconContainer>
      <div>
        <S.Title m="30px 0 14px" variant="h6" align="left">
          {props.title}
        </S.Title>
        <div>
          <S.Paragraph component={'p'} m="0 0 10px" align="left" color={FEEDBACK_TEXT}>
            {props.text.split('\n').map((txt, key) => (
              <React.Fragment key={key}>
                {txt}
                <br />
              </React.Fragment>
            ))}
          </S.Paragraph>
        </div>
      </div>
    </Individual_S.DetailsContainer>
  );
}

Detail.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  text: PropTypes.string
};
