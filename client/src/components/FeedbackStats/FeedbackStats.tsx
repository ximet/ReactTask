import InputRating from 'components/InputRating/InputRating';
import FeedbackContext from 'contexts/FeedbackContext';
import React, { useContext } from 'react';
import { Feedback } from 'types';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  const feedbackRatingAvg = feedback.reduce(
    (prev: number, current: Feedback, index: number, array: Feedback[]): number => {
      const sum = prev + +current.rating / array.length;
      return sum;
    },
    0
  );

  return (
    <div>
      <h4>{feedback.length} Reviews</h4>
      <InputRating
        type="hidden"
        name="postRating"
        id="postNum"
        value={Math.round(feedbackRatingAvg)}
        onChange={() => {
          return null;
        }}
      />
      <h4>{feedbackRatingAvg.toFixed(2)}</h4>
    </div>
  );
};

export default FeedbackStats;
