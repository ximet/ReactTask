import React, { FC } from 'react';
import { Feedback } from 'types';
import { BsStar, BsStarFill } from 'react-icons/bs';

type ItemProps = {
  item: Feedback;
};

const FeedbackItem: FC<ItemProps> = ({ item }) => {
  const starArray = [...Array(5).keys()].map(i => {
    return i + 1;
  });

  return (
    <div>
      {starArray.map(i => {
        return item.rating >= i ? <BsStarFill key={i} /> : <BsStar key={i} />;
      })}
      <h3>{item.reviewTitle}</h3>
      <p>{item.review}</p>
      <h6>by {item.nickname}</h6>
    </div>
  );
};

export default FeedbackItem;
