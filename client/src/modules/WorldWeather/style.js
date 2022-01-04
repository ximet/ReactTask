import { styled } from '@mui/material/styles';
import * as S from '../../app_data/styles_info/common_styles';
import {
  BLACK_COLOR_GENERAL, BLACK_SHADOW_LAYER_GENERAL,
  GRAY_COLOR_GENERAL,
  PURPLE_COLOR_GENERAL,
  WHITE_COLOR_GENERAL
} from '../../app_data/styles_info';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

export const ContentContainer = styled(S.GridContainer)(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: `${BLACK_SHADOW_LAYER_GENERAL}`
}));

export const TempContainer = styled('span')(() => ({
  color: WHITE_COLOR_GENERAL,
  position: 'absolute',
  top: '0',
  right: '0',
  left: '0',
  bottom: '0',
  display: 'inline-block',
  fontSize: '70px',
  padding: '20px',
  fontWeight: 700,
  '.city-state': { fontSize: '13px', margin: 0, color: `${GRAY_COLOR_GENERAL}` },
  '.degrees': {
    display: 'inline-block',
    fontWeight: 100,
    verticalAlign: 'top',
    marginTop: '15px',
    marginLeft: '5px',
    fontSize: '0.4em'
  }
}));

export const DateContainer = styled('span')(() => ({
  color: WHITE_COLOR_GENERAL,
  height: '100px',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  margin: 'auto',
  padding: '20px',
  span: { verticalAlign: 'top', display: 'block' },
  '.time': { fontSize: '40px' },
  '.date': { fontSize: '12px', marginTop: '5px', textTransform: 'uppercase' },
  '.year-month': { fontSize: '10px', color: `${GRAY_COLOR_GENERAL}`, textTransform: 'uppercase' }
}));

export const TopBar = styled('div')(style => ({
  textAlign: 'left',
  padding: '20px 45px',
  color: `${BLACK_COLOR_GENERAL}`,
  fontSize: '12px',
  letterSpacing: '2px',
  [style.theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    padding: '20px 10px'
  },
  '.weather': { marginRight: '10px' },
  '.forecast': { color: `${PURPLE_COLOR_GENERAL}`, marginLeft: '10px' }
}));

export const ListTittle = styled(S.Title)(() => ({
  fontWeight: 700,
  fontSize: '0.8em',
  color: `${BLACK_COLOR_GENERAL}`,
  fontFamily: 'Montserrat, sans-serif',
  marginBottom: '15px',
  letterSpacing: '2px'
}));

export const ForecastList = styled(List)(style => ({
  display: 'flex',
  flexWrap: 'wrap',
  padding: '0px 20px',
  marginBottom: style.marginBottom ? `${style.marginBottom}` : '40px'
}));

export const ForecastListItem = styled(ListItem)(style => ({
  width: style.width ? `${style.width}` : '25%',
  textAlign: 'center',
  fontWeight: 700,
  color: `${WHITE_COLOR_GENERAL}`,
  display: 'inline-block'
}));

export const WeatherDetail = styled(ListItem)(style => ({
  fontWeight: 400,
  textAlignLast: 'left',
  color: `${WHITE_COLOR_GENERAL}`,
  display: 'inline-block',
  '.MuiListItemText-primary': {
    fontSize: '0.8rem'
  },
  '.MuiTypography-root': {
    color: `${WHITE_COLOR_GENERAL}`,
    fontWeight: 400,
    fontSize: '0.8rem'
  }
}));

export const ForecastListItemText = styled(ListItemText)(style => ({
  fontFamily: 'Montserrat, sans-serif',
  '.MuiListItemText-primary': {
    fontWeight: style.regular ? `${style.regular}` : 700,
    color: style.color ? `${style.color}` : `${BLACK_COLOR_GENERAL}`,
    textTransform: 'uppercase'
  },
  '.MuiListItemText-secondary': {
    color: `${GRAY_COLOR_GENERAL}`,
    fontSize: '12px',
    textTransform: 'uppercase',
    fontWeight: 400
  }
}));

export const ForecastListIconWrapper = styled(ListItemIcon)(style => ({
  justifyContent: 'center',
  color: `${BLACK_COLOR_GENERAL}`,
  fontSize: '12px',
  textTransform: 'uppercase',
  fontWeight: 400,
  img: {
    width: style.iconWidth ? `${style.iconWidth}` : '35px'
  }
}));

export const WeatherIcon = styled('img')(() => ({
  width: '49px'
}));
