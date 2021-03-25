/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import PageLayout from '../../PageLayout/PageLayout';
import Button from '../../components/Button/Button';
import styles from './FeedbackPage.scss';

function FeedbackPage() {
  const [userFeedback, setUserFeedback] = useState({});
  const history = useHistory();
  const handleClick = () => {
    try {
      localStorage.setItem(`${userFeedback.username}`, JSON.stringify(userFeedback));
      history.push('/');
    } catch {
      history.push('/error');
    }
  };

  return (
    <PageLayout>
      <form className={styles.feedback}>
        <div className={styles.feedback__formItem}>
          <label htmlFor="username" className={styles.bold}>
            Username
          </label>
          <input
            type="text"
            id="username"
            className={styles.feedback__text}
            onChange={e => setUserFeedback({ ...userFeedback, username: e.target.value })}
          />
        </div>
        <div className={styles.feedback__formItem}>
          <span className={styles.bold}>Gender</span>
          <div onChange={e => setUserFeedback({ ...userFeedback, gender: e.target.value })}>
            <label htmlFor="male" className={styles.bold}>
              Male
            </label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              className={styles.feedback__text}
            />
            <label htmlFor="male" className={styles.bold}>
              Female
            </label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              className={styles.feedback__text}
            />
          </div>
        </div>
        <div className={styles.feedback__formItem}>
          <label htmlFor="likes" className={styles.bold}>
            Do you like our page?
          </label>
          <input
            type="checkbox"
            id="likes"
            value="Like"
            className={styles.feedback__text}
            onChange={e => setUserFeedback({ ...userFeedback, like: e.target.checked })}
          />
        </div>
        <div className={styles.feedback__formItem}>
          <label htmlFor="age" className={styles.bold}>
            Give us rate!
          </label>
          <input
            type="number"
            min="0"
            max="10"
            id="age"
            className={styles.feedback__text}
            onChange={e => setUserFeedback({ ...userFeedback, rate: e.target.value })}
          />
        </div>
        <div className={styles.feedback__formItem}>
          <label htmlFor="country" className={styles.bold}>
            Country
          </label>
          <select
            id="country"
            name="country"
            className={styles.feedback__text}
            onChange={e => setUserFeedback({ ...userFeedback, country: e.target.value })}
          >
            <option value="United States">United States</option>
            <option value="Belarus">Belarus</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Romania">Romania</option>
            <option value="Lithuania">Lithuania</option>
          </select>
        </div>
        <Button onClick={handleClick} title="Submit" className={styles.ctxBtn} />
      </form>
    </PageLayout>
  );
}

export default FeedbackPage;
