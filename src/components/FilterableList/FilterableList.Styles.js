import styled from 'styled-components';
import {
  filterableListBackgroundColorLight,
  filterableListBackgroundColorDark
} from '../../common/cssVariables';

export const StyledUl = styled.ul`
  margin: 0;
  list-style-type: none;
  padding: 0 0.5em;
  background-color: ${({ theme }) =>
    theme.isLight ? filterableListBackgroundColorLight : filterableListBackgroundColorDark};
  height: auto;
  width: 12em;
  overflow-y: auto;
  height: 50em;
  box-sizing: content-box;
`;
export const StyledLi = styled.li`
  display: flex;
  padding: 1em 0;
  text-align: center;
  justify-content: center;
  text-transform: capitalize;
  cursor: pointer;
`;
export const StyledInput = styled.input`
  min-width: 3em;
  text-transform: lowercase;
`;
