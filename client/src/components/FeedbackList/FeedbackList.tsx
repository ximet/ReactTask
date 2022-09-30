import FeedbackItem from 'components/FeedbackItem/FeedbackItem';
import FeedbackContext from 'contexts/FeedbackContext';
import React, { useContext } from 'react';

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  return (
    <div>
      {feedback.map(item => {
        return <FeedbackItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default FeedbackList;
