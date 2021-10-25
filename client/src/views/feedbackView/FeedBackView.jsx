import React from 'react';
import classes from './feedback.module.css';
import FeedbackForm from '../../layouts/feedbackForm/FeedbackForm';
import PropTypes from 'prop-types';

function FeedBackView({ theme }) {
  return (
    <div className={classes.container} data-theme={theme}>
      <h3 className={classes.feedbackTitle}>Feedback</h3>
      <FeedbackForm />
    </div>
  );
}

FeedBackView.propTypes = {
  theme: PropTypes.string.isRequired
};

export default FeedBackView;
