import React, { FC, useState } from 'react';

import commonStyle from 'styles/commonStyles.css';
import { ViewFeedbacks } from './ViewFeedbacks';
import { FeedbackFrom } from './FeedbackForm';
import { FeedbackState } from 'types/feedbackType';
import { sendFeedback, getFeedbacks } from 'services/localStorage';

export const Feedback: FC = () => {
  const [feedbacks, setFeedbacks] = useState<FeedbackState[]>(getFeedbacks);

  const updateFeedbacks = (feedback: FeedbackState) => {
    const newFeedback: FeedbackState = {
      ...feedback,
      id: Math.random()
    };
    setFeedbacks(prevState => [...prevState, newFeedback]);
    sendFeedback(newFeedback);
  };

  return (
    <main className={commonStyle.container}>
      <FeedbackFrom updateFeedbacks={updateFeedbacks} />
      <ViewFeedbacks feedbacks={feedbacks} />
    </main>
  );
};
