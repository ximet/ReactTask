import styled from 'styled-components';

import { sectionRoot } from 'styles/mixins';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from 'styles/constants';

export const NotFoundPage = styled.section`
  ${sectionRoot}
  height: calc(100vh - ${HEADER_HEIGHT}rem - ${FOOTER_HEIGHT}rem);
  padding: 0 2.5rem;

  h2 {
    text-align: center;
  }
`;
