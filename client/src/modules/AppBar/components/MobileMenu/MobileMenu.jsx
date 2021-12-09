import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as S from '../../style';
import PropTypes from 'prop-types';

export function MobileMenu(props) {
  return (
    <S.Box xs="flex" md="none">
      <S.IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={e => props.onOpen(e)}
      >
        <MenuIcon />
      </S.IconButton>
      <S.Menu
        id="menu-appbar"
        anchorEl={props.anchor}
        vertical="top"
        horizontal="left"
        open={Boolean(props.anchor)}
        onClose={props.onClose}
        xs="block"
        md="none"
      >
        {props.pages.map(page => (
          <MenuItem key={page.name} onClick={props.onClose}>
            <S.Link to={page.path} exact={page.exact}>
              {page.name}
            </S.Link>
          </MenuItem>
        ))}
      </S.Menu>
    </S.Box>
  );
}

MobileMenu.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      component: PropTypes.elementType,
      path: PropTypes.string,
      exact: PropTypes.bool
    })
  ),
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  anchor: PropTypes.object
};
