import React, { FunctionComponent } from 'react';

// Components
import Header from 'components/Header/Header';
import AboutHeroSection from 'components/AboutPage/AboutHeroSection/AboutHeroSection';
import AboutHowSection from 'components/AboutPage/AboutHowSection/AboutHowSection';
import AboutFeedbackSection from 'components/AboutPage/AboutFeedbackSection/AboutFeedbackSection';

const AboutPage: FunctionComponent = () => (
  <>
    <Header />
    <main>
      <AboutHeroSection />
      <AboutHowSection />
      <AboutFeedbackSection />
    </main>
  </>
);

export default AboutPage;
