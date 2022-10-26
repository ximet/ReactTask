import React, { FunctionComponent } from 'react';

// Styles
import { Flex } from 'styles/global';
import * as S from './NotFoundPage.styles';

const NotFoundPage: FunctionComponent = () => (
  <S.NotFoundPage>
    <Flex directionColumn>
      <h2>Ups... something went wrong. Page not found!</h2>
    </Flex>
  </S.NotFoundPage>
);

export default NotFoundPage;
