import styled from 'styled-components';
import {
  filterableListWidth,
  headerBackgroundColorLight,
  headerBackgroundColorDark,
  headerHeight
} from '../../common/cssVariables';

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: ${filterableListWidth} 3fr 1fr;
  grid-template-rows: ${headerHeight};
  background-color: ${({ theme }) =>
    theme.isLight ? headerBackgroundColorLight : headerBackgroundColorDark};
  height: ${headerHeight};
  padding: 0;
  margin: 0;
`;
export const DivButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DivTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
`;
export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
