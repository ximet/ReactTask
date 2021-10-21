import React from 'react';

import styles from './Feedback.module.scss';
import FeedbackComments from './FeedbackComments/FeedbackComments';
import FeedbackForm from './FeedbackForm/FeedbackForm';

function Feedback() {
  return (
    <div className={styles.feedback}>
      <div className={styles.formWrapper}>
        <h2 className={styles.feedbackTitle}>Give feedback</h2>
        <span className={styles.feedbackSubtitle}>
          What do you think about our app? Rate your experience
        </span>
        <FeedbackForm />
      </div>
      <FeedbackComments />
    </div>
  );
}

export default Feedback;
