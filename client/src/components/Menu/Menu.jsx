import React from 'react';
import * as S from '../AppBar/style';
import PropTypes from 'prop-types';

export function Menu(props) {
  return (
    <S.Box xs={props.xs} md={props.md} justify={props.justify}>
      {props.pages.map(page => (
        <S.Button
          component={S.Link}
          key={page.name}
          to={page.path}
          exact={page.exact}
          onClick={props.onClose || null}
          display="block"
          my={16}
        >
          {page.name}
        </S.Button>
      ))}
    </S.Box>
  );
}

Menu.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      component: PropTypes.elementType,
      path: PropTypes.string,
      exact: PropTypes.bool
    })
  ),
  xs: PropTypes.string,
  md: PropTypes.string,
  justify: PropTypes.string
};
