import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

// Store
import { useAppSelector } from 'redux/hooks';
import { selectTheme } from 'redux/reducers/global';

// Components
import Button from 'components/Button/Button';

// Assets
import { Wave } from 'assets/images/svg';

// Styles
import { Container, Flex } from 'styles/global';
import * as S from '../AboutPage.styles';

const AboutFeedbackSection: FunctionComponent = () => {
  const theme = useAppSelector(selectTheme);

  return (
    <S.AboutFeedbackSection themeType={theme}>
      <Wave reversed />
      <Container>
        <Flex directionColumn>
          <h2>Leave A Feedback</h2>
          <p>Liked our service or maybe were dissatisfied with it?</p>
          <Link to="/feedback">
            <Button type="button" aria-label="Go to feedback page" color="white">
              Tell Us About It
            </Button>
          </Link>
        </Flex>
      </Container>
    </S.AboutFeedbackSection>
  );
};

export default AboutFeedbackSection;
