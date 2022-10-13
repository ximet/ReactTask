import React, { FunctionComponent } from 'react';

// Components
import FeedbackHeroSection from 'components/FeedbackPage/FeedbackHeroSection/FeedbackHeroSection';
import FeedbackTestimonialsSection from 'components/FeedbackPage/FeedbackTestimonialsSection/FeedbackTestimonialsSection';
import FeedbackFormSection from 'components/FeedbackPage/FeedbackFormSection/FeedbackFormSection';

const FeedbackPage: FunctionComponent = () => (
  <main>
    <FeedbackHeroSection />
    <FeedbackTestimonialsSection />
    <FeedbackFormSection />
  </main>
);

export default FeedbackPage;
