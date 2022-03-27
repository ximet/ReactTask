import React from 'react';
import classes from './Feedback.module.css';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';

function Feedback() {
  return (
    <div className={classes.feedback}>
      <div className={classes.feedback_wrapper}>
        <div className={classes.form__wrapper}>
          <h2 className={classes.feedback_title}>Feedback Form</h2>
          <p className={classes.feedback_subtitle}>
            What do you think about our app? Rate your experience
          </p>
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
