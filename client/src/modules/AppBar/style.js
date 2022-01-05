import { styled } from '@mui/material/styles';
import BaseTypography from '@mui/material/Typography';
import BaseBox from '@mui/material/Box';
import IconBtn from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import MenuUI from '@mui/material/Menu';
import ButtonMUI from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
export const AppBarMUI = styled(AppBar)(style => ({
  position: 'static',
  background: style.theme.palette.gradient.footer
}));

export const Logo = styled(BaseTypography)(style => ({
  flexGrow: style.grow ? `${style.grow}` : 0,
  marginRight: style.mr ? `${style.mr}px` : '0px',
  color: style.theme.palette.common.additional,
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
  color: style.theme.palette.common.additional
}));

export const Button = styled(ButtonMUI)(style => ({
  margin: style.my ? `${style.my}px 0` : '0px',
  color: style.theme.palette.common.additional,
  display: style.display ? `&{style.display}` : 'block'
}));

export const Link = styled(NavLink)(style => ({
  textDecoration: 'none',
  color: style.theme.palette.common.additional,
  [`&.active`]: {
    color: style.theme.palette.common.active
  }
}));

export const Menu = styled(MenuUI)(style => ({
  [`& .MuiList-root`]: {
    background: style.theme.palette.gradient.mobileMenu,
    transformOrigin: `${style.horizontal} ${style.vertical}`,
    [style.theme.breakpoints.up('md')]: {
      display: `${style.md}`
    },
    [style.theme.breakpoints.down('md')]: {
      display: `${style.xs}`
    }
  }
}));
