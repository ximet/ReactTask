import { styled } from '@mui/material/styles';
import * as S from '../../app_data/styles_info/common_styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

export const ContentContainer = styled(S.GridContainer)(style => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: style.theme.palette.layerShadow
}));

export const TempContainer = styled('span')(style => ({
  color: style.theme.palette.common.additional,
  position: 'absolute',
  top: '0',
  right: '0',
  left: '0',
  bottom: '0',
  display: 'inline-block',
  fontSize: '70px',
  padding: '20px',
  fontWeight: 700,
  '.city-state': { fontSize: '13px', margin: 0, color: style.theme.palette.secondary.notes },
  '.degrees': {
    display: 'inline-block',
    fontWeight: 100,
    verticalAlign: 'top',
    marginTop: '15px',
    marginLeft: '5px',
    fontSize: '0.4em'
  }
}));

export const DateContainer = styled('span')(style => ({
  color: style.theme.palette.common.additional,
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
  '.year-month': {
    fontSize: '10px',
    color: style.theme.palette.secondary.notes,
    textTransform: 'uppercase'
  }
}));

export const TopBar = styled('div')(style => ({
  textAlign: 'left',
  padding: '20px 45px',
  color: style.theme.palette.common.main,
  fontSize: '12px',
  letterSpacing: '2px',
  [style.theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    padding: '20px 10px'
  },
  '.weather': { marginRight: '10px' },
  '.forecast': { color: style.theme.palette.secondary.main, marginLeft: '10px' }
}));

export const ListTittle = styled(S.Title)(style => ({
  fontWeight: 700,
  fontSize: '0.8em',
  color: style.theme.palette.common.main,
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
  color: style.theme.palette.common.additional,
  display: 'inline-block'
}));

export const WeatherDetail = styled(ListItem)(style => ({
  fontWeight: 400,
  textAlignLast: 'left',
  color: style.theme.palette.common.additional,
  display: 'inline-block',
  '.MuiListItemText-primary': {
    fontSize: '0.8rem'
  },
  '.MuiTypography-root': {
    color: style.theme.palette.common.additional,
    fontWeight: 400,
    fontSize: '0.8rem'
  }
}));

export const ForecastListItemText = styled(ListItemText)(style => ({
  fontFamily: 'Montserrat, sans-serif',
  '.MuiListItemText-primary': {
    fontWeight: style.regular ? `${style.regular}` : 700,
    color: style.special_color
      ? style.theme.palette.common.additional
      : style.theme.palette.common.main,
    textTransform: 'uppercase'
  },
  '.MuiListItemText-secondary': {
    color: style.theme.palette.secondary.notes,
    fontSize: '12px',
    textTransform: 'uppercase',
    fontWeight: 400
  }
}));

export const ForecastListIconWrapper = styled(ListItemIcon)(style => ({
  justifyContent: 'center',
  color: style.theme.palette.common.main,
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
