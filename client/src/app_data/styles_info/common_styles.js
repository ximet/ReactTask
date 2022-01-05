import { styled } from '@mui/material/styles';
import BaseBox from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import ButtonMUI from '@mui/material/Button';
import { weather_bg_image } from './index';

export const Box = styled(BaseBox)(() => ({
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '15px',
  paddingRight: '15px'
}));

export const Container = styled(BaseBox)(style => ({
  margin: '0 auto',
  width: '100%',
  maxWidth: style.maxWidth ? `${style.maxWidth}px` : '700px',
  textAlign: 'center',
  padding: style.padding ? `${style.padding}` : '40px 0',
  boxShadow: `0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)`,
  borderRadius: '6px'
}));

export const Title = styled(Typography)(style => ({
  margin: style.m ? `${style.m}` : '0',
  display: style.display ? style.display : 'block',
  color: style.theme.palette.secondary.title,
  textAlign: `${style.align}` ? `${style.align}` : 'initial',
  fontFamily: `Roboto Slab, Times New Roman, serif`,
  fontWeight: 700
}));

export const Paragraph = styled(Typography)(style => ({
  fontSize: `14px`,
  margin: style.m ? `${style.m}` : '0px',
  fontFamily: `Roboto, Helvetica, Arial,sans-serif`,
  lineHeight: `1.5em`,
  textAlign: style.align ? `${style.align}` : 'initial',
  color: style.color ? `${style.color}` : style.theme.palette.secondary.title,
  fontWeight: 300
}));

export const GridContainer = styled(Grid)(() => ({
  width: 'auto',
  margin: 0
}));

export const GridItem = styled(Grid)(style => ({
  margin: style.margin ? `${style.margin}` : '',
  marginLeft: style.marginLeft ? style.marginLeft : '',
  width: style.width ? style.width : '100%',
  position: 'relative',
  minHeight: style.minHeight ? `${style.minHeight}` : '1px',
  background: style.backgroundimg
    ?  weather_bg_image[style.backgroundimg] :'',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  padding: style.padding ? style.padding : '0 15px',
  [style.theme.breakpoints.down('sm')]: {
    margin: '0'
  }
}));

export const MuiSvgIconContainer = styled('div')(style => ({
  color: style.theme.palette.secondary.main,
  float: 'left',
  marginTop: style.mtop ? `${style.mtop}` : '24px',
  marginRight: '10px',
  ['& .MuiSvgIcon-root']: {
    width: '2.25rem',
    height: '2.25rem',
    fontSize: '2.25rem'
  }
}));

export const Button = styled(ButtonMUI)(style => ({
  margin: style.my ? `${style.my}px 0` : '0 auto',
  color: style.theme.palette.common.main,
  display: style.display ? `${style.display}` : 'block',
  borderRadius: '30px',
  boxShadow:
    '0 2px 2px 0 rgb(156 39 176 / 14%), 0 3px 1px -2px rgb(156 39 176 / 20%), 0 1px 5px 0 rgb(156 39 176 / 12%)',
  backgroundColor: style.theme.palette.secondary.main,
  border: 'none',
  cursor: 'pointer',
  padding: '12px 30px',
  position: 'relative',
  fontSize: '12px',
  minWidth: 'auto',
  minHeight: 'auto',
  textAlign: 'center',
  transition:
    'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  fontWeight: 400,
  lineHeight: 1.42857143,
  whiteSpace: 'nowrap',
  willChange: 'box-shadow, transform',
  touchAction: 'manipulation',
  letterSpacing: '0',
  textTransform: 'uppercase',
  verticalAlign: 'middle'
}));
