import React from 'react';

import styles from './Feedback.module.scss';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import FeedbackImage from '../../assets/images/feedback-img.png';

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
      <img className={styles.formImage} src={FeedbackImage} alt="feedback" />
    </div>
  );
}

export default Feedback;
