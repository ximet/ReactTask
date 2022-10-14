import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from 'components/Button/Button';

// Assets
import { Wave } from 'assets/images/svg';
import heroImg1 from 'assets/images/dashboard-landing.png';
import heroImg2 from 'assets/images/search-landing.png';

// Styles
import { Container, Flex, Headline } from 'styles/global';
import * as S from '../AboutPage.styles';

const AboutHeroSection: FunctionComponent = () => (
  <S.AboutHeroSection>
    <Wave />
    <Container>
      <Flex alignFlexStart>
        <S.AboutHeroContent>
          <Headline>
            <span>Learn More</span>
            We provide weather predictions in your city
          </Headline>
          <p>Easy steps to predict the weather and make your day easier</p>
          <Link to="/">
            <Button type="button" aria-label="Go to dashboard page">
              Get Started
            </Button>
          </Link>
          <a href="#how-it-works">See How It Works</a>
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
