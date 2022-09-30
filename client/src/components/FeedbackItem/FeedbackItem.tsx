import React, { FC } from 'react';
import { Feedback } from 'types';
import InputRating from 'components/InputRating/InputRating';
import styles from './FeedbackItem.module.scss';

type ItemProps = {
  item: Feedback;
};

const FeedbackItem: FC<ItemProps> = ({ item }) => {
  return (
    <div className={styles.feedbackItemContainer}>
      <hr />
      <div className={styles.titleContainer}>
        <h3>{item.reviewTitle}</h3>
        <InputRating disabled type="hidden" name="postRating" id="postNum" value={item.rating} />
      </div>
      <p>{item.review}</p>
      <h5>by {item.nickname}</h5>
    </div>
  );
};

export default FeedbackItem;
