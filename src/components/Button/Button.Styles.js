import styled from 'styled-components';
import { buttonBackgroundColorLight, buttonBackgroundColorDark } from '../../common/cssVariables';

export const StyledButton = styled.button`
  width: 7em;
  background-color: ${({ theme }) =>
    theme.isLight ? buttonBackgroundColorLight : buttonBackgroundColorDark};
  border-radius: 0.3em;
  outline: auto;
`;
