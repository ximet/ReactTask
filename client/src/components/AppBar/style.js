import { styled } from '@mui/material/styles';
import BaseTypography from '@mui/material/Typography';
import BaseBox from '@mui/material/Box';
import IconBtn from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import MenuUI from '@mui/material/Menu';
import ButtonMUI from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const WHITE_COLOR_GENERAL = '#fff';
const ACTIVE_LINK_COLOR = '#ffff19';
const MOBILE_MENU_BG = `linear-gradient(135deg, #e079fc 0%, #7c44ff 100%)`;
const HEADER_BG = `linear-gradient(-45deg, #0c9ed4 0%, #51c9f5 100%)`;

export const AppBarMUI = styled(AppBar)({
  position: 'static',
  background: `${HEADER_BG}`
});

export const Logo = styled(BaseTypography)(style => ({
  flexGrow: style.grow ? `${style.grow}` : 0,
  marginRight: style.mr ? `${style.mr}px` : '0px',
  [style.theme.breakpoints.up('md')]: {
    display: `${style.md}`
  },
  [style.theme.breakpoints.down('md')]: {
    display: `${style.xs}`
  }
}));

export const Box = styled(BaseBox)(style => ({
  flexGrow: 1,
  justifyContent: style.justify ? style.justify : 'unset',
  [style.theme.breakpoints.up('md')]: {
    display: `${style.md}`
  },
  [style.theme.breakpoints.down('md')]: {
    display: `${style.xs}`,
    flexWrap: 'wrap'
  }
}));

export const IconButton = styled(IconBtn)(style => ({
  fontSize: style.size ? style.size : 'large',
  color: `${WHITE_COLOR_GENERAL}`
}));

export const Button = styled(ButtonMUI)(style => ({
  margin: style.my ? `${style.my}px 0` : '0px',
  color: `${WHITE_COLOR_GENERAL}`,
  display: style.display ? `&{style.display}` : 'block'
}));

export const Link = styled(NavLink)({
  textDecoration: 'none',
  color: `${WHITE_COLOR_GENERAL}`,
  [`&.active`]: {
    color: `${ACTIVE_LINK_COLOR}`
  }
});

export const Menu = styled(MenuUI)(style => ({
  [`& .MuiList-root`]: {
    background: `${MOBILE_MENU_BG}`,
    transformOrigin: `${style.horizontal} ${style.vertical}`,
    [style.theme.breakpoints.up('md')]: {
      display: `${style.md}`
    },
    [style.theme.breakpoints.down('md')]: {
      display: `${style.xs}`
    }
  }
}));
