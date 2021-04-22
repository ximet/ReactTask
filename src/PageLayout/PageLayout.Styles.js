import styled from 'styled-components';
import { mainViewDark, mainViewLight } from '../common/cssVariables';

export const DivMain = styled.div`
  display: flex;
  height: 50em;
  background-color: ${({ theme }) => (theme.isLight ? mainViewLight : mainViewDark)};
`;
