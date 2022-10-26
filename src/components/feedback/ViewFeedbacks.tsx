import React, { FC } from 'react';

import { getArray } from 'utils/helpers';
import { FeedbackState } from 'types/feedbackType';
import { RatingStar } from './RatingStar';
import styles from './Feedback.css';

type ViewFeedbackProps = {
  feedbacks: FeedbackState[];
};

export const ViewFeedbacks: FC<ViewFeedbackProps> = ({ feedbacks }) => {
  return (
    <section className={styles['view-feedback']}>
      <h2 className={styles['feedbacks-section-title']}>Feedbacks</h2>
      {feedbacks.length ? (
        feedbacks.map(({ id, name, rating, feedback }) => (
          <article className={styles['feedbacks-article']} key={id}>
            <h3 className={styles['feedback-article-name']}>{name}</h3>
            <div className={styles['feedback-stars']}>
              {getArray(5).map(value => (
                <RatingStar
                  ratingValue={value}
                  currentRating={rating}
                  key={value}
                  className={styles['rating-label_feedbacks']}
                />
              ))}
            </div>
            <p className={styles['feedback-article-text']}>{feedback}</p>
          </article>
        ))
      ) : (
        <p>Be the first who leave a review!</p>
      )}
    </section>
  );
};
