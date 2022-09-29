import React, { FunctionComponent, MutableRefObject } from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from 'components/Button/Button';

// Assets
import { Wave } from 'assets/images/svg';
import heroImg1 from 'assets/images/dashboard-landing.png';
import heroImg2 from 'assets/images/search-landing.png';

// Utils
import { handleScrollTo } from 'utils/helpers';

// Styles
import { Container, Flex } from 'styles/global';
import * as S from '../AboutPage.styles';

interface AboutHeroSectionProps {
  scrollToRef: MutableRefObject<HTMLElement | null>;
}

const AboutHeroSection: FunctionComponent<AboutHeroSectionProps> = ({ scrollToRef }) => (
  <S.AboutHeroSection>
    <Wave />
    <Container>
      <Flex>
        <S.AboutHeroContent>
          <S.AboutHeadline>
            <span>Weather App</span>
            Find your weather predictions in your city
          </S.AboutHeadline>
          <p>Easy steps to predict the weather and make your day easier</p>
          <Link to="/">
            <Button>Get Started</Button>
          </Link>
          <Link to="#how-it-works" onClick={() => handleScrollTo(scrollToRef)}>
            See How It Works
          </Link>
        </S.AboutHeroContent>
        <S.AboutHeroImage>
          <img src={heroImg1} alt="App preview" />
          <img src={heroImg2} alt="App preview" />
        </S.AboutHeroImage>
      </Flex>
    </Container>
  </S.AboutHeroSection>
);

export default AboutHeroSection;
