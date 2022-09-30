import FeedbackForm from 'components/FeedbackForm/FeedbackForm';
import FeedbackList from 'components/FeedbackList/FeedbackList';
import FeedbackStats from 'components/FeedbackStats/FeedbackStats';
import SecondaryPagesLayout from 'components/layouts/SecondaryPagesLayout';
import { FeedbackProvider } from 'contexts/FeedbackContext';
import React from 'react';

const Feedback = () => {
  return (
    <SecondaryPagesLayout>
      <h2>Leave your Feedback</h2>
      <FeedbackProvider>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </FeedbackProvider>
    </SecondaryPagesLayout>
  );
};

export default Feedback;
