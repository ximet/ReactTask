import React, { FunctionComponent } from 'react';

// Styles
import { Container, Flex } from 'styles/global';
import * as S from './NotFoundPage.styles';

const NotFoundPage: FunctionComponent = () => (
  <S.NotFoundPage>
    <Container>
      <Flex directionColumn>
        <h2>Ups... something went wrong. Page not found!</h2>
      </Flex>
    </Container>
  </S.NotFoundPage>
);

export default NotFoundPage;
