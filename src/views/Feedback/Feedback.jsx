import React from 'react';

import styles from './Feedback.module.scss';
import FeedbackComments from './FeedbackComments/FeedbackComments';
import FeedbackForm from './FeedbackForm/FeedbackForm';

function Feedback() {
  return (
    <div className={styles.feedback}>
      <FeedbackForm />
      <FeedbackComments />
    </div>
  );
}

export default Feedback;
