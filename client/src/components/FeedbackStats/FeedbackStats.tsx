import InputRating from 'components/InputRating/InputRating';
import FeedbackContext from 'contexts/FeedbackContext';
import React, { useContext } from 'react';
import { calculateFeedbackAvg } from 'utils/calculateFeedbackAvg';
import styles from './FeedbackStats.module.scss';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

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
