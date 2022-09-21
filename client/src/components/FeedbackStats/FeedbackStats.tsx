import FeedbackContext from 'contexts/FeedbackContext';
import React, { useContext } from 'react';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  return (
    <div>
      <h4>{feedback.length} Reviews</h4>
    </div>
  );
};

export default FeedbackStats;
