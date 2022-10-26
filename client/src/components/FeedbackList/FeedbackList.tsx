import FeedbackItem from 'components/FeedbackItem/FeedbackItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { feedbackSelector } from 'redux/feedbackReducer';
import { Feedback } from 'types';

const FeedbackList = () => {
  const { feedback } = useSelector(feedbackSelector);
  return (
    <div>
      {feedback?.map((item: Feedback) => {
        return <FeedbackItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default FeedbackList;
