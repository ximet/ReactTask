import React from 'react';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import commonClasses from '../common.scss';
import classes from './FeedbackPage.module.scss';

const FeedbackPage = () => {
  return (
    <main className={`${commonClasses.page} ${classes.feedbackPage}`}>
      <h2 className={classes.feedbackPage__header}>Feedback</h2>
      <p className={classes.feedbackPage__description}>
        Thank you for doing business with us. Can you take 1 minute to leave a review about your
        experience with us? Thanks for your help!
      </p>
      <FeedbackForm />
    </main>
  );
};

export default FeedbackPage;
