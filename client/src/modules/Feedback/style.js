import { styled } from '@mui/material/styles';
import BaseBox from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  FEEDBACK_ICON,
  FEEDBACK_TITLE_PARAGRAPH,
  WHITE_COLOR_GENERAL
} from '../../app_data/styles_info';
import { Grid } from '@mui/material';
import InputField from '@mui/material/TextField';
import ButtonMUI from '@mui/material/Button';

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
  padding: '40px 0',
  boxShadow: `0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)`,
  borderRadius: '6px'
}));

export const Title = styled(Typography)(style => ({
  margin: style.m ? `${style.m}` : '0',
  display: style.display ? style.display : 'block',
  color: `${FEEDBACK_TITLE_PARAGRAPH}`,
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
  color: style.color ? `${style.color}` : `${FEEDBACK_TITLE_PARAGRAPH}`,
  fontWeight: 300
}));

export const GridContainer = styled(Grid)(() => ({
  width: 'auto',
  margin: 0
}));

export const GridItem = styled(Grid)(style => ({
  marginLeft: style.marginLeft ? style.marginLeft : '',
  width: '100%',
  position: 'relative',
  minHeight: '1px',
  padding: '0 15px'
}));

export const TextField = styled(InputField)(() => ({
  margin: '0 0 17px 0',
  position: 'relative',
  paddingTop: '27px',
  maxWidth: '45ch',
  ['& .MuiFormLabel-root']: {
    top: '10px',
    fontSize: '14px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 400,
    lineHeight: 1.42857,
    letterSpacing: 'unset'
  },
  ['& .MuiInput-underline']: {
    marginTop: 0
  }
  // [`& .MuiInput-underline:hover::before`]: {
  //   pointerEvents: 'none'
  // }
}));

export const MuiSvgIconContainer = styled('div')(() => ({
  color: `${FEEDBACK_ICON}`,
  float: 'left',
  marginTop: '24px',
  marginRight: '10px',
  ['& .MuiSvgIcon-root']: {
    width: '2.25rem',
    height: '2.25rem',
    fontSize: '2.25rem'
  }
}));

export const DetailsContainer = styled('div')(() => ({
  display: 'flex',
  paddingTop: '0',
  paddingBottom: '10px',
  margin: '0 auto',
  maxWidth: '360px'
}));

export const Button = styled(ButtonMUI)(style => ({
  margin: style.my ? `${style.my}px 0` : '0 auto',
  color: `${WHITE_COLOR_GENERAL}`,
  display: style.display ? `&{style.display}` : 'block',
  borderRadius: '30px',
  boxShadow:
    '0 2px 2px 0 rgb(156 39 176 / 14%), 0 3px 1px -2px rgb(156 39 176 / 20%), 0 1px 5px 0 rgb(156 39 176 / 12%)',
  backgroundColor: `${FEEDBACK_ICON}`,
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
