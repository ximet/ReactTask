import { styled } from '@mui/material/styles';
import * as S from '../../app_data/styles_info/common_styles';
import TravelExploreSharpIcon from '@mui/icons-material/TravelExploreSharp';

export const CustomWeatherContainer = styled('div')(style => ({
  display: 'flex',
  alignItems: style.alignItems ? style.alignItems : 'center',
  alignSelf: style.alignSelf ? style.alignSelf : 'center',
  margin: style.m ? style.m : 0
}));


export const SearchButton = styled(S.Button)(() => ({
  width: '41px',
  height: '41px',
  fontSize: '20px',
  padding: 0,
  minWidth: '41px',
  margin: '0.3125rem 1px',
  touchAction: 'manipulation',
}));

export const SearchIcon = styled(TravelExploreSharpIcon)(() => ({
  top: '0',
  width: '21px',
  height: '21px',
  display: 'inline-block',
  position: 'relative',
  verticalAlign: 'middle'
}));

