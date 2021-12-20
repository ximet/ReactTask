import { styled } from '@mui/material/styles';
import BaseBox from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FEEDBACK_ICON, FEEDBACK_TITLE_PARAGRAPH } from './index';
import { Grid } from '@mui/material';

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

export const MuiSvgIconContainer = styled('div')((style) => ({
  color: `${FEEDBACK_ICON}`,
  float: 'left',
  marginTop: style.mtop ? `${style.mtop}` : '24px',
  marginRight: '10px',
  ['& .MuiSvgIcon-root']: {
    width: '2.25rem',
    height: '2.25rem',
    fontSize: '2.25rem'
  }
}));