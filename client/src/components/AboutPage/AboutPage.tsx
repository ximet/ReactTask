import React, { FunctionComponent, useRef } from 'react';

// Components
import Header from 'components/Header/Header';
import AboutHeroSection from 'components/AboutPage/AboutHeroSection/AboutHeroSection';
import AboutHowSection from 'components/AboutPage/AboutHowSection/AboutHowSection';
import AboutFeedbackSection from 'components/AboutPage/AboutFeedbackSection/AboutFeedbackSection';

const AboutPage: FunctionComponent = () => {
  const aboutHowSectionRef = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <Header />
      <main>
        <AboutHeroSection scrollToRef={aboutHowSectionRef} />
        <AboutHowSection customRef={aboutHowSectionRef} />
        <AboutFeedbackSection />
      </main>
    </>
  );
};

export default AboutPage;
