import React from 'react';
import FeedbackForm from 'components/FeedbackForm/FeedbackForm';
import SecondaryPagesLayout from 'components/layouts/SecondaryPagesLayout';
import { FeedbackProvider } from 'contexts/FeedbackContext';

const Feedback = () => {
  return (
    <SecondaryPagesLayout>
      <h2>Leave your Feedback</h2>
      <FeedbackProvider>
        <FeedbackForm />
      </FeedbackProvider>
    </SecondaryPagesLayout>
  );
};

export default Feedback;
