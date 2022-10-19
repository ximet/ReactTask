import InputRating from 'components/InputRating/InputRating';
import React from 'react';
import { useSelector } from 'react-redux';
import { calculateFeedbackAvg } from 'utils/calculateFeedbackAvg';
import { feedbackSelector } from 'redux/feedbackReducer';

import styles from './FeedbackStats.module.scss';

const FeedbackStats = () => {
  const feedback = useSelector(feedbackSelector);

  return (
    <div className={styles.container}>
      <h4>{feedback.length} Reviews</h4>
      <div className={styles.statsContainer}>
        <InputRating
          type="hidden"
          name="postRating"
          id="postNum"
          value={Math.round(calculateFeedbackAvg(feedback))}
        />
        <h4 className={styles.ratingAvg}>{calculateFeedbackAvg(feedback).toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default FeedbackStats;
