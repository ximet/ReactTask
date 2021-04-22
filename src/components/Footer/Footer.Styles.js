import styled from 'styled-components';
import { footerBackgroundColorDark, footerBackgroundColorLight } from '../../common/cssVariables';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme.isLight ? footerBackgroundColorLight : footerBackgroundColorDark};
  height: 8%;
  width: 100%;
`;
