import React from 'react';
import * as PropTypes from 'prop-types';
import * as S from '../style';
import Menu from '../../common/Menu';

export function Footer(props) {
  return (
    <S.Footer display="flex">
      <S.Container maxWidth={700}>
        <S.FooterLogo m={16} variant="caption">
          © {props.appName}, 2021
        </S.FooterLogo>
        <S.BreakLine width={60} margin="20px auto" />
        <Menu md="flex" xs="flex" pages={props.pages} justify={'center'} />
        <S.BreakLine width={60} margin="20px auto" />
      </S.Container>
    </S.Footer>
  );
}

Footer.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      component: PropTypes.elementType,
      path: PropTypes.string,
      exact: PropTypes.bool
    })
  )
};
