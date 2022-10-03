import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from 'components/Button/Button';

// Assets
import { Wave } from 'assets/images/svg';

// Styles
import { Container, Flex } from 'styles/global';
import * as S from '../AboutPage.styles';

const AboutFeedbackSection: FunctionComponent = () => (
  <S.AboutFeedbackSection>
    <Wave reversed />
    <Container>
      <Flex directionColumn>
        <h2>Leave A Feedback</h2>
        <p>Liked our service or maybe were dissatisfied with it?</p>
        <Link to="/feedback">
          <Button color="white">Tell Us About It</Button>
        </Link>
      </Flex>
    </Container>
  </S.AboutFeedbackSection>
);

export default AboutFeedbackSection;
