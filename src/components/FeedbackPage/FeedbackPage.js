import React from 'react';
import * as styles from '../../styles/FeedbackPage.module.css';

function FeedbackPage(props) {
  return (
    <form className={styles.feedbackForm}>
      <h2 className={styles.feedbackHeading}>Give us your feedback!</h2>
      <div className={styles.formGroup}>
        <label htmlFor="question1">1. How often do you use this application?</label>
        <input type="text" placeholder="Type your answer here" name="question1"></input>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="question2">2. What is your overall impression of the application?</label>
        <input type="text" placeholder="Type your answer here" name="question2"></input>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="question3">3. Are you able to easily find the location you are searching for?</label>
        <input type="text" placeholder="Type your answer here" name="question3"></input>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="question4">4. What improvements to the application would you recommend?</label>
        <input type="text" placeholder="Type your answer here" name="question4"></input>
      </div>
      <button className={styles.submitBtn}>Submit</button>
    </form>
  );
}

export { FeedbackPage };
