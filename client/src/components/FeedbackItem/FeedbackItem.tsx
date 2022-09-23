import React, { FC } from 'react';
import { Feedback } from 'types';
import InputRating from 'components/InputRating/InputRating';

type ItemProps = {
  item: Feedback;
};

const FeedbackItem: FC<ItemProps> = ({ item }) => {
  return (
    <div>
      <InputRating
        type="hidden"
        name="postRating"
        id="postNum"
        value={item.rating}
        onChange={() => {
          return null;
        }}
      />
      <h3>{item.reviewTitle}</h3>
      <p>{item.review}</p>
      <h6>by {item.nickname}</h6>
    </div>
  );
};

export default FeedbackItem;
