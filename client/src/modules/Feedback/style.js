import { styled } from '@mui/material/styles';
import BaseBox from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  PURPLE_COLOR_GENERAL,
  FEEDBACK_TITLE_PARAGRAPH,
  WHITE_COLOR_GENERAL
} from '../../app_data/styles_info';
import { Grid } from '@mui/material';
import InputField from '@mui/material/TextField';

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
