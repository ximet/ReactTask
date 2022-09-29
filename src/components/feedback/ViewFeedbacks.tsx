import React, { FC } from 'react';

import { getFeedbacks } from 'services/localStorage';
import { IoMdStarOutline, IoMdStar } from 'react-icons/io';
import styles from './Feedback.css';

type ViewFeedbackProps = {
  prop: number;
};

export const ViewFeedbacks: FC<ViewFeedbackProps> = React.memo(() => {
  const feedbacks = getFeedbacks();

  return (
    <section className={styles['view-feedback']}>
      <h2 className={styles['feedbacks-section-title']}>Feedbacks</h2>
      {feedbacks.map(feedback => (
        <article className={styles['feedbacks-article']} key={feedback.id}>
          <h3 className={styles['feedback-article-name']}>{feedback.name}</h3>
          <div className={styles['feedback-stars']}>
            {[1, 2, 3, 4, 5].map(value => (
              <React.Fragment key={value}>
                {value <= feedback.rating ? <IoMdStar /> : <IoMdStarOutline />}
              </React.Fragment>
            ))}
          </div>
          <p className={styles['feedback-article-text']}>{feedback.feedback}</p>
        </article>
      ))}
    </section>
  );
});
