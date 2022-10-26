import styled from 'styled-components';

import { breakpoints } from 'styles/breakpoints';

export const Footer = styled.footer`
  padding: 1.5rem 0;

  @media ${breakpoints.sm} and (orientation: portrait) {
    margin-top: 5vh;
  }
`;
