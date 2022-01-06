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
