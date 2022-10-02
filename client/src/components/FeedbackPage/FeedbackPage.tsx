import React, { FunctionComponent } from 'react';

// Components
import FeedbackHeroSection from 'components/FeedbackPage/FeedbackHeroSection/FeedbackHeroSection';
import FeedbackFormSection from 'components/FeedbackPage/FeedbackFormSection/FeedbackFormSection';

const FeedbackPage: FunctionComponent = () => (
  <main>
    <FeedbackHeroSection />
    <FeedbackFormSection />
  </main>
);

export default FeedbackPage;
