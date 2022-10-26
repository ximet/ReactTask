import styled from 'styled-components';

import { sectionRoot } from 'styles/mixins';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from 'styles/constants';

export const NotFoundPage = styled.section`
  ${sectionRoot}
  height: calc(100vh - ${HEADER_HEIGHT}rem - ${FOOTER_HEIGHT}rem);

  > div {
    height: 100%;
  }

  h2 {
    text-align: center;
  }
`;
