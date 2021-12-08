import { styled } from '@mui/material/styles';
import BaseTypography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import BaseBox from '@mui/material/Box';
import { WHITE_COLOR_GENERAL, FOOTER_BG } from '../../app_data/styles_info';

export const Footer = styled('footer')(style => ({
  position: 'static',
  background: `${FOOTER_BG}`,
  color: `${WHITE_COLOR_GENERAL}`,
  display: style.display ? style.display : 'block',
  transition: `box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
  boxShadow: `0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)`
}));

export const Container = styled(BaseBox)(style => ({
  margin: '0 auto',
  maxWidth: style.maxWidth ? `${style.maxWidth}px` : '700px',
  textAlign: 'center'
}));

export const FooterLogo = styled(BaseTypography)(style => ({
  margin: style.m ? `${style.m}px ${style.m}px` : '0px',
  display: style.display ? style.display : 'block'
}));

export const BreakLine = styled(Divider)(style => ({
  width: style.width ? `${style.width}px` : '60px',
  margin: style.margin ? `${style.margin}` : 0
}));
